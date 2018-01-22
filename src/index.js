// import o from './other'

setTimeout(async function () {
    var p = await import('./page2')
    p.default();
}, 5000)

var div = document.createElement('div')

div.style.height = "100px"

div.className = "test"

document.body.appendChild(div)