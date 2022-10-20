/**
 * 
 * @param {[ObjectMedia]} listMedia 
 * @param {INT} index find when we opened lightboxview and update with navigate event
 * @param {HTMLElement} domElement lightbox element from modalObject
 */
export default function createLightboxCard(listMedia, index, domElement) {


    let element = listMedia[index].createCard(true)
    let a = element.querySelector("a")
    a.setAttribute("aria-label", "Fermeture de la vue en gros plan")
    a.setAttribute("tabindex", "5",)
    if (domElement.querySelector("figure")) {
        domElement.querySelector("figure").remove()
    }
    document.querySelector("#lightbox").querySelector("svg").insertAdjacentElement("afterend", element)
}