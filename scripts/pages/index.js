    import PhotographerFactory from '../factories/photographer.js'
    import {getUserCardDOM} from "../vue/photographerCard.js"


    fetch("./data/photographers.json")
    .then(res=>res.ok ? res.json():null)
    .then(data =>{
        for(let item of data.photographers){
            let photographer = PhotographerFactory(item,"json")
            let card = getUserCardDOM(photographer)
            document.querySelector(".photographer_section").append(card)


            
        }
    })


    