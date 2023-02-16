document.getElementById("parent").addEventListener('click', (e) => {
    if(e.target){
        console.log(e.target.nodeName);
        console.log(`pressed ${e.target.id}`)
    }
})