import mediaFactory from "../factories/media.js";


export default class Photographer {
    constructor(dataPhotographer) {
        this.name = dataPhotographer.name
        this.city = dataPhotographer.city
        this.country = dataPhotographer.country
        this.id = dataPhotographer.id
        this.portrait = dataPhotographer.portrait
        this.price = dataPhotographer.price
        this.tagline = dataPhotographer.tagline
        this.mediaList = [];
    }
    getMediaList(data) {
        for (let entry of data.media) {
            if (entry.photographerId === this.id) {
                let media = new mediaFactory(entry)
                this.mediaList.push(media)
            }
        }
        this.sortMediaList(1)
    }
    displayMediaList() {
        let main = document.querySelector("main")
        if (document.querySelector("#mediaGallery")) {
            document.querySelector("#mediaGallery").remove()
        }
        let contain = document.createElement("section")
        contain.setAttribute("id", "mediaGallery")
        for (let media of this.mediaList) {
            let figure = media.createCard()
            contain.append(figure)
        }
        main.appendChild(contain)
    }
    /**
     * Sort media list with filter
     * 0 && 1 -> Popularity (asc and desc)
     * 2 && 3 -> Date (asc and desc)
     * 4 && 5 -> Name (asc and desc)
     */
    sortMediaList(sort) {
        switch (sort) {
            case 0:
                this.mediaList.sort((a, b) => b.likes - a.likes)
                break;
            case 1:
                this.mediaList.sort((a, b) => a.likes - b.likes)
                break;
            case 2:
                this.mediaList.sort((a, b) => {
                    if (b.title.toLowerCase() < a.title.toLowerCase()) {
                        return -1
                    }
                    if (b.title.toLowerCase() > a.title.toLowerCase()) {
                        return 1
                    }
                    return 0
                })
                break;
            case 3:
                this.mediaList.sort((a, b) => {
                    if (a.title.toLowerCase() < b.title.toLowerCase()) {
                        return -1
                    }
                    if (a.title.toLowerCase() > b.title.toLowerCase()) {
                        return 1
                    }
                    return 0
                })
                break;
            case 4:
                this.mediaList.sort((a, b) => {
                    if (b.date.toLowerCase() < a.date.toLowerCase()) {
                        return -1
                    }
                    if (b.date.toLowerCase() > a.date.toLowerCase()) {
                        return 1
                    }
                    return 0
                })
                break;
            case 5:
                this.mediaList.sort((a, b) => {
                    if (a.date.toLowerCase() < b.date.toLowerCase()) {
                        return -1
                    }
                    if (a.date.toLowerCase() > b.date.toLowerCase()) {
                        return 1
                    }
                    return 0
                })
                break;

        }
        this.displayMediaList()
    }

    /**
     * Count all media's likes for this photographer
     */
    likeCount() {
        this.count = 0
        for (let media of this.mediaList) {
            this.count += media.likes
        }
        return this.count
    }
}

