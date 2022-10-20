
/**
 * All media are similar, just <img> or <video> change in figure.
 */
export default class Media {
    /**
     * @param {ObjectInformation} data it's an entry in photographer's medias list
     */
    constructor(data) {
        this.id = data.id
        this.title = data.title
        this.date = data.date
        this.likes = data.likes
        this.price = data.price
        this.photographerId = data.photographerId
        this.isLike = false
        this.likeBtn = document.createElement("button")
        this.likeBtn.setAttribute("tabindex","4")
        this.likeBtn.setAttribute("aria-label","Vous n'avez pas liké ce média ! ")
        this.likeBtn.innerHTML = `${this.likes} <i class="fa-regular fa-heart"></i>`

        this.likeBtn.addEventListener("click", () => {
            this.likeMedia()
            this.likeBtn.querySelector("i").classList.toggle("btnFill")
        })

    }
    likeMedia() {
        this.isLike ? this.likes-- : this.likes++
        this.isLike = !this.isLike  
        let i = !this.isLike ? '<i class="fa-regular fa-heart btnFill"><i>':'<i class="fa-regular fa-heart"></i>'
        if(this.isLike){
            this.likeBtn.setAttribute("aria-label","Vous avez liké ce média !")
        }
        else{
            this.likeBtn.setAttribute("aria-label","Vous n'avez pas liké ce média !")           
        }
        this.likeBtn.innerHTML = `${this.likes} ${i}`

    }

}