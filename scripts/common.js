const closeButton=document.querySelector('.closeButton');
const mobileMenu=document.querySelector('.mobile-menu');
const menuBar=document.querySelector('.menu-bar');

closeButton.addEventListener("click",()=>{
    mobileMenu.style.display="none";
    menuBar.style.display="block";
});

menuBar.addEventListener("click",()=>{
    menuBar.style.display="none";
    mobileMenu.style.display="block";
});