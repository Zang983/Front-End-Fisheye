
import PhotographerFactory from "../factories/photographer.js";
import createHeaderPhotographer from "../vue/headerPhotographer.js"
import Lightbox from "../object/lightbox.js"
import Modal from "../object/modal.js"
import {filterEvent} from "../utils/filter.js"
import stickyBar from "../utils/stickyBar.js"


fetch("./data/photographers.json")
    .then(res => res.ok ? res.json() : null)
    .then(data => {
        let targetId = new URL(window.location.href).searchParams.get("id")
        let photographer = null
        /*
        Create photographer object and create his header
         */
        for (let item of data.photographers) {
            if (item.id === parseInt(targetId, 10)) {
                photographer = PhotographerFactory(item, "json")
                createHeaderPhotographer(photographer)
            }
        }
        /*
        Init gallery
        */
        photographer.getMediaList(data)
        filterEvent(photographer)
        /*
        Init stickyBar
        */

        stickyBar(photographer)
        /*
        Init contact modal
        */

        let modal = new Modal(photographer.name)
        modal.initEvent();


        /*Init lightbox */
        let lightbox =  new Lightbox(photographer)
        lightbox.lightboxOpenEvent()

    })

