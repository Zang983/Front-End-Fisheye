import createCard from "../vue/createLightboxCard.js"
export default class lightbox {

    /**
     * 
     * @param {PhotographerObject} photographer 
     */
    constructor(photographer) {
        this.mediaList = photographer.mediaList
        this.visible = false;//if lightbox is open or not
        this.domElement = document.querySelector("#lightbox")
        this.media = null // actual media
        this.index = null //actual index
        this.init = false; // block new listener if there are already init
    }


    /**
     * Manage the visibility of each element.
     */
    toggleVisibility() {
        this.visible = !this.visible
        let othersDomElement = [
            document.querySelector("header"),
            document.querySelector("main"),
            document.querySelector("#contact_modal"),
            document.querySelector(".stickyBar")
        ]
        if (this.visible) {
            document.querySelector("body").style.overflow="hidden"
            document.querySelector(".stickyBar").classList.toggle("hidden")
            for (let element of othersDomElement) {
                element.setAttribute("aria-hidden", "true")
            }
            this.domElement.style.display = "flex"
            this.domElement.setAttribute("aria-hidden", "false")
        }
        else {
            document.querySelector(".stickyBar").classList.toggle("hidden")
            document.querySelector("body").style.overflow="initial"
            for (let element of othersDomElement) {
                element.setAttribute("aria-hidden", "false")
            }
            this.domElement.setAttribute("aria-hidden", "true")
            this.domElement.style.display = "none"

        }
    }

    /**
     * Add an event to open lightbox on each cards.
     * we take the filename of the e.target and give it to displayLightbox for the first display.
     */
    lightboxOpenEvent() {
        /* Open ligthbox when someone click*/
        let linksFigure = document.querySelectorAll("main figure a")
        for (let link of linksFigure) {
            link.addEventListener("click", (e) => {
                e.preventDefault()
                let filepath = e.target.getAttribute("src").split("/")
                let filename = filepath[filepath.length - 1]
                this.toggleVisibility()
                if (this.visible) {
                    this.index = null
                    this.displayLightbox(filename)
                    this.navigateEvent()
                }
            })
        }
    }

    /**
     * 
     * @param {stringg} filename 
     * when call for the first time we find index with filename.
     * call createCard from import
     */
    displayLightbox(filename) {
        if (this.index === null) {
            for (let i = 0; i < this.mediaList.length; i++) {
                if (this.mediaList[i].image === filename || this.mediaList[i].video === filename) {
                    this.index = i
                    break;
                }
            }
        }
        this.mediaList[this.index].image ? this.media = this.mediaList[this.index].image : this.media = this.mediaList[this.index].video
        createCard(this.mediaList, this.index, this.domElement)
    }

    navigateEvent() {
        /*
            On every display we initialise each close buttons and create an event who work once time
        */
        if (this.visible === true) {
            let closeElements = [//if we want to add others btn
                this.domElement.querySelector(".closeBtn")]
            for (let element of closeElements) {
                if (element != null) {
                    element.addEventListener("click", (e) => {
                        e.preventDefault()
                        this.toggleVisibility();
                    }, { once: "true" })
                }
            }
            /*
                We init once time all window event and navigation buttons.
                We change index of media here and call displayLightbox
            */
            if (!this.init) {
                this.init = true;
                window.addEventListener("keydown", (e) => {
                    if (this.visible) {
                        switch (e.key) {
                            case ("Escape"):
                                this.toggleVisibility()
                                break;
                            case ("ArrowLeft"):
                                this.index === 0 ? this.index = this.mediaList.length - 1 : this.index--
                                break;
                            case ("ArrowRight"):
                                this.index === this.mediaList.length - 1 ? this.index = 0 : this.index++
                                break;
                        }
                        this.displayLightbox()
                    }
                })
                let navigationButton = [
                    document.querySelectorAll("#lightbox .chevron")[0],//previous
                    document.querySelectorAll("#lightbox .chevron")[1] //next
                ]
                navigationButton[0].addEventListener("click", () => {
                    this.index === 0 ? this.index = this.mediaList.length - 1 : this.index--
                    this.displayLightbox()
                })
                navigationButton[1].addEventListener("click", () => {
                    this.index === this.mediaList.length - 1 ? this.index = 0 : this.index++
                    this.displayLightbox()
                })

            }
        }
    }
}