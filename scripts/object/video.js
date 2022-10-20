import Media from "../object/media.js"
import createMediaCard from "../vue/createMediaCard.js"

export default class Video extends Media {

    /**
     * 
     * @param {ObjectInformation} data from photographer's media list
     */
    constructor(data) {
        super(data)
        this.video = data.video
    

    }
/**
 * 
 * @param {boolean} isInLightBox to know if we are in lightbox view
 * @returns {HTMLElement}
 */
    createCard(isInLightBox) {
        let data = {
            title: this.title,
            date: this.date,
            likes: this.likes,
        }
        let mediaField = "./data/medias"
        let video = document.createElement("video")
        video.setAttribute("src", `${mediaField}/${this.photographerId}/${this.video}`)
        if (isInLightBox) {
            video.setAttribute("controls", ``)
        }
        video.setAttribute("type", `video/mp4`)
        return createMediaCard(video, this.likeBtn, data,isInLightBox)
    }
}