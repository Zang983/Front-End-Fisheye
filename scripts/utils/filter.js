
export function toggleFilter() {
    let btn = document.querySelector("#filterBlock button")
    btn.getAttribute("aria-expanded") === "true" ? btn.setAttribute("aria-expanded", "false") : btn.setAttribute("aria-expanded", "true")
    document.querySelector(".sortOf").classList.toggle("hidden")
}

export function callPhotographerSort(photographer, parameter) {
    let btn = document.querySelector("#filterBlock button span")
    if (parameter === "Popularité") {
        btn.innerText = "Popularité"
        photographer.sortMediaList(1)
    }
    else if (parameter === "Titre") {
        btn.innerText = "Titre"
        photographer.sortMediaList(3)
    }
    else if (parameter === "Date") {
        btn.innerText = "Date"
        photographer.sortMediaList(5)
    }
}

export function filterEvent(photographer) {

    let lis = document.querySelectorAll(".sortOf li")
    let btn = document.querySelector("#filterBlock button")
    let span = btn.querySelector("span")
    let chevron = btn.querySelector("svg")
    /*
    Display list elements, and hidden if element aready selected by user
    */
    btn.addEventListener("click", () => {
        chevron.classList.toggle("rotated")
        for (let li of lis) {
            if (span.innerHTML === li.innerHTML) {
                li.classList.add("hidden")
            }
            else {
                li.classList.remove("hidden")
            }
        }
        toggleFilter()
    })
        for (let li of lis) {
            li.addEventListener("keypress",e=>{
                    if (e.key === "Enter") {
                        callPhotographerSort(photographer, e.target.innerText)
                        toggleFilter()
                    }
            })

        }
  
    /*
    add click listener to sort of
    */
    for (let li of lis) {
        li.addEventListener("click", (e) => {
            callPhotographerSort(photographer, e.target.innerText)
            toggleFilter()
        })
    }
}