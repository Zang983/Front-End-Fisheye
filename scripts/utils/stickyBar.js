export default function stickyBar(photographer) {

    let stickyBar = document.createElement("div")
    stickyBar.classList.add("stickyBar")
    let likes = photographer.likeCount()
    let likesDisplay = document.createElement("div")
    likesDisplay.classList.add("likes")
    likesDisplay.innerHTML = `${likes}<i class="fa-regular fa-heart btnFill"><i>`
    let price = document.createElement("div")
    price.innerText = `${photographer.price}€ / jour`
    stickyBar.append(likesDisplay, price)

    let likeBtns = document.querySelectorAll("#mediaGallery figure button")
    for (let button of likeBtns) {
        button.addEventListener("click", () => {
            likes = photographer.likeCount()
            likesDisplay.innerHTML = `${likes}<i class="fa-regular fa-heart btnFill"><i>`
            price.innerText = `${photographer.price}€ / jour`

        })
    }
    document.querySelector("body").append(stickyBar)

}