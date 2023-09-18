const tombol = document.querySelector("button")
const h1 = document.querySelector("h1")
tombol.addEventListener('click', function(){
    if(h1.style.color == "red"){
        h1.style.color = "aqua"
    }else{
        h1.style.color = "red"
    }
})

tombol.addEventListener("dblclick", ()=>{
    if(body.style.backgroundColor == "purple"){
        body.style.backgroundColor = "white"
    }else{
        body.style.backgroundColor = "purple"
    }
})