const button1 = document.createElement('button')
button1.innerText = 'REGULAR FUNC'

const button1ClickHandler = function () {
    console.dir(this)
}

button1.addEventListener(
    'click',
    button1ClickHandler
)

document.body.appendChild(button1)

const button2 = document.createElement('button')
button2.innerText = 'REGULAR FUNC BOUND'

const button2ClickHandler = function () {
    console.dir(this)
}
const button2ClickHandlerBound = button2ClickHandler.bind(this)

button2.addEventListener(
    'click',
    button2ClickHandlerBound
)

document.body.appendChild(button2)

const button3 = document.createElement('button')
button3.innerText = 'REGULAR FUNC BOUND INLINE'

button3.addEventListener(
    'click',
    (function () {
        console.dir(this)
    }).bind(this)
)

document.body.appendChild(button3)

const button4 = document.createElement('button')
button4.innerText = 'ARROW FUNC'

button4.addEventListener(
    'click',
    () => console.dir(this)
)

document.body.appendChild(button4)