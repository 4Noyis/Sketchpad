
let button = document.querySelector("#grid-btn")


function createGrid() {
    
    
       
    const container=document.querySelector(".container");
    let side = prompt("Choose number of squares per side for the new grid.")
    if(side>64){
        alert("please enter input below 65.")
    
        return
    }
    let square =(side*side)+1;
    let sidePixel=side*25;
    
    // sayfayı temizler tüm alt divleri siliyo
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    

    // sketchpad istenilen boyuta göre oluşturuyo
    document.getElementById("container").style=`
    display: flex; 
    flex-wrap: wrap; 
    width: ${sidePixel}px; 
    height: ${sidePixel}px;`

    // girlen sayının karesi kadar div child oluşturuyo
    for (let i = 1; i < square; i++) {
        const div=document.createElement('div');
        div.classList.add("pixels")
    
        // Painting efekti ekliyo
        div.addEventListener("mouseover",(e)=>{
        div.classList.add("black")
    })

    // oluşturulan divler containera ekleniyo
    container.appendChild(div)

    /*
    // oluşturulan divlere pixels clası atanıp hepsinde değişiklik yapılabilir
    const pixels=document.getElementsByClassName("pixels");
    for (let i = 0; i < pixels.length; i++) {
        const element = pixels[i];
        console.log(element);
    }
    */
    
    }
}





/* Yapılacaklar

-mouse hovering +
-square chosing css'te sıkıntı var 16n olan yerin sürekli değişmesi gerekiyor + containera yeni sınıf eklenerek yapıldı
-prompt kısmını bi butona eventListiner olarak atıyıp tekrar tıklanınca yeni boyutta alan oluşturcak +
-
*/

