class Dog {
    constructor(data) {
        Object.assign(this, data)
    }

    getDogHtml = function () {
        const { name, avatar, age, bio } = this
        return `<img src=${avatar} alt="the Dog" class="dog-picture">
                <h4 class="dog-name">${name}, ${age}</h4>
                <p class="bio">${bio}</p>`
    }
}

export { Dog }