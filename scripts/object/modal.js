// SI la personne revient trop en arrière : bug d'affichage
/**
 * This class manage the contact modal with:
 * - a toggle function who change aria-hidden informations and change dispaly
 * - a function who init all event about this modal (open,close,submit)
 */
export default class Modal {
    constructor(contactName) {
        this.contactName = contactName
        this.openButton = document.querySelector(".contact_button")
        this.closeBtn = document.querySelector(".modal .closeBtn")
        this.submitButton = document.querySelector(".submit_button")
        this.visible = false;
        this.modal = document.querySelector("#contact_modal")
        this.inputs = document.querySelectorAll("#contact_modal input")
        this.textarea = document.querySelector("#contact_modal textarea")
        this.h2 = this.modal.querySelector("h2")
        this.h2.innerHTML += `<br>${this.contactName}`
    }

    toggleModal() {
        let othersDomElement = [
            document.querySelector("header"),
            document.querySelector("main"),
            document.querySelector("#lightbox"),
            document.querySelector("#stickyBar")]
        this.visible = !this.visible
        for (let element of othersDomElement) {
            element.setAttribute("aria-hidden", `${this.visible}`)
        }
        this.modal.setAttribute("aria-hidden", `${!this.visible}`)

        if (this.visible) {
            document.querySelector("body").style.overflow = "hidden"
            this.modal.style.display = "flex"
        }
        else {
            document.querySelector("body").style.overflow = "initial"
            this.modal.style.display = "none";
        }

    }
    initEvent() {
        this.openButton.addEventListener("click", () => {
            this.toggleModal();
            this.inputs[0].focus({ preventScroll: true, focusVisible: true })
        })
        this.closeBtn.addEventListener("click", () => {
            this.toggleModal()
        })

        this.submitButton.addEventListener("click", () => {
            for (let input of this.inputs) {
                console.log(input.value)
                input.value = "";
            }
            console.log(this.textarea.value)
            this.textarea.value = ""
            this.toggleModal()
        })
        window.addEventListener("keydown", e => {
            if (this.visible) {


                if (e.key === "Escape") {
                    this.toggleModal()
                }
            }
        })
    }
}