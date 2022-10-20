export function getUserCardDOM(photographer) {
    let picture = `./data/medias/avatar/${photographer.portrait}`

    const article = document.createElement("article")
    const a = document.createElement("a")
    a.setAttribute("href",`photographer.html?id=${photographer.id}`)
    a.setAttribute("tabindex",`2`)
    a.setAttribute("aria-label",`Visitez la galerie de ${photographer.name}`)
    const figure = document.createElement("figure")
    const img = document.createElement( 'img' );
    img.setAttribute("src", picture)
    img.setAttribute("aria-label", `Avatar de ${photographer.name}`)
    const figcaption = document.createElement("figcaption")
    const h2 = document.createElement( 'h2' );
    const quote = document.createElement("q")
    quote.textContent = photographer.tagline
    quote.classList.add("tagline")
    const price = document.createElement("p")
    price.classList.add("price")
    price.textContent= photographer.price + "€"

    const localisation = document.createElement("p")
    localisation.classList.add("localisation")
    localisation.textContent = photographer.city + ", " + photographer.country

    h2.textContent = photographer.name;
    figcaption.appendChild(h2);

   
    a.append(figure)

    article.append(a,localisation,quote,price)

    figure.append(img,figcaption);


    return (article);
}