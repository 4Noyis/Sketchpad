
const container=document.querySelector(".container");
let side = prompt("chose your pad's size")

let square =(side*side)+1;

for (let i = 1; i < square; i++) {
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
