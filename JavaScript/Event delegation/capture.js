for(let elem of document.querySelectorAll('*')){
    // elem.addEventListener('click', e=>alert(`capture: ${elem.tagName}`))
    console.log(elem.tagName)
    elem.addEventListener('click', (e) => {
        return alert(`capturing: ${elem.tagName}`)
    }, true)

    elem.addEventListener('click', (e) => {
        return alert(`bubbling: ${elem.tagName}`)
    })
}