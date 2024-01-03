const bigPic = document.querySelector("#main img");  
const smallPics = document.querySelectorAll("#navi ul li a");  

for(let i=0; i<smallPics.length; i++) {
    smallPics[i].addEventListener("click", function(e) {
        const newPic = this.href;
        bigPic.setAttribute("src", newPic);
        e.preventDefault(); //a태그의 본래 속성을 중단
    });
}