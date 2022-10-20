import Media from "../object/media.js"
import createMediaCard from "../vue/createMediaCard.js"

export default class Image extends Media {
    /**
     * 
     * @param {ObjectInformation} data from photographer's media list
     * @param {*} isInLightBox to know if lightbox is open
     */
    constructor(data) {
        super(data)
        this.image = data.image
    }

    createCard(isInLightBox) {
        let data = {
            title: this.title,
            date: this.date,
            likes: this.likes,
        }
        let mediaField = "./data/medias"
        let img = document.createElement("img")
        img.setAttribute("src", `${mediaField}/${this.photographerId}/${this.image}`)
        img.setAttribute("alt", `${this.title}`)

        return createMediaCard(img, this.likeBtn, data,isInLightBox)
    }

}