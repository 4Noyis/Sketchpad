
const container=document.querySelector(".container");


for (let i = 1; i < 257; i++) {
    //const element = array[i];
    const div=document.createElement('div');
    div.classList.add("pixels")
    
    
    div.addEventListener("mouseover",(e)=>{
        div.classList.add("black")
    })
    container.appendChild(div)
    
}





const pixels=document.getElementsByClassName("pixels");
for (let i = 0; i < pixels.length; i++) {
    const element = pixels[i];
    console.log(element);
}
