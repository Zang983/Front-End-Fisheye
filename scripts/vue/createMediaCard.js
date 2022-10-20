/**
 * 
 * @param {HTMLElement} element create in image|video object
 * @param {HTMLElement} likeBtn media's like button
 * @param {MediaObject} data media's informations
 * @param {boolean} lightBox boolean if we are in lightBox view
 * @returns 
 */
export default function createMediaCard(element, likeBtn, data,lightBox){


    let a= document.createElement("a")
    a.setAttribute("href","#")
    a.setAttribute("aria-label",`Ouverture de la vue en gros plan.`)
    a.setAttribute("title",`${data.title}`)
    a.setAttribute("role",`link`)
    a.setAttribute("tabindex",`4`)
    let figure = document.createElement('figure')

    let figcaption = document.createElement('figcaption')
    let h3 = document.createElement('h3')
    
    h3.innerText = data.title
    figcaption.append(h3)

    /* If is lightbox view, we didn't move like button*/
    !lightBox ? figcaption.append(likeBtn):null
    a.append(element)
    figure.append(a,figcaption)

    return figure

}