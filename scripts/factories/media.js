import Image  from "../object/image.js"
import Video  from "../object/video.js"
export default class mediaFactory {
    constructor(data, isLightbox) {

        if (data.image) {
            return new Image(data)
        }
        else if (data.video) {
            return new Video(data, isLightbox)
        }


    }
}