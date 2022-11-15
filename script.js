import { Dog } from "./Dog.js";
import { dogs } from "./data.js";

const rejectBtn = document.getElementById("reject-btn")
const likeBtn = document.getElementById("heart-btn")
const nope = document.getElementById("nope")
const like = document.getElementById("like")
let isWaiting = false
let dogArray = [0, 1, 2]



// Reject button listener
rejectBtn.addEventListener("click", function (event) {
    event.preventDefault()
    if (!isWaiting) {
        if (dogArray.length > 0) {
            isWaiting = true
            nope.style.display = "block"
            setTimeout(() => {
                tindog = getNewDog()
                nope.style.display = "none"
                render()
                isWaiting = false
            }, 1500)

        } else {
            isWaiting = true
            nope.style.display = "block"
            setTimeout(() => {
                nope.style.display = "none"
                document.getElementById("personal-info").innerHTML = `<div class="no-more">We are sorry, but we could not find any more dogs..Refresh and maybe you´ll find match!</div>`
            }, 1500)

        }
    }

})

// Like button listener
likeBtn.addEventListener("click", function (event) {
    event.preventDefault()
    if (!isWaiting) {
        if (dogArray.length > 0) {
            like.style.display = "block"
            isWaiting = true
            setTimeout(() => {
                tindog = getNewDog()
                isWaiting = false
                like.style.display = "none"
                render()
            }, 1500)

        } else {
            isWaiting = true
            like.style.display = "block"
            setTimeout(() => {
                like.style.display = "none"
                document.getElementById("personal-info").innerHTML = `<div class="no-more">We are sorry, but we could not find any more dogs..Refresh and maybe you´ll find match!</div>`
            }, 1500)


        }
    }


})



// Functions 

// get new dog
function getNewDog() {
    const newDog = dogs[dogArray.shift()]

    return newDog ? new Dog(newDog) : {}
}

let tindog = getNewDog()

function render() {
    document.getElementById("personal-info").innerHTML = tindog.getDogHtml()
}

render()