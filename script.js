let header = document.querySelector(".header");

window.addEventListener("scroll",()=>
{
    header.classList.toggle("sticky",window.screenY>0);
});
let loader = document.querySelector(".loader");
window.addEventListener("load",()=>{
    loader.style.display="none";
});
