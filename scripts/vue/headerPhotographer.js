/**
 * 
 * @param {PhotographerObject} photographer contain all information about photographer
 */
export default function createHeader(photographer){

    const section = document.querySelector(".photograph-header")
    const div=document.createElement("div")
    const h1 = document.createElement("h1")
    const city = document.createElement("p")
    city.classList.add("localisation")
    const tagline = document.createElement("q")
    tagline.classList.add("tagline")
    const img = document.createElement("img")

    h1.textContent = photographer.name
    city.textContent = photographer.city + ", " + photographer.country
    tagline.textContent = photographer.tagline

    img.setAttribute("src",`./data/medias/avatar/${photographer.portrait}`)
    img.setAttribute("alt",`${photographer.name}`)
    div.append(h1,city,tagline)
    section.prepend(div)
    section.append(img)
    

}