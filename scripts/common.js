const closeButton=document.querySelector('.closeButton');
const mobileMenu=document.querySelector('.mobile-menu');
const menuBar=document.querySelector('.menu-bar');
const header=document.querySelector("#header");
const mainContainer=document.querySelector("#mainContainer");
const footer=document.querySelector("#footer");

closeButton.addEventListener("click",()=>{
    mobileMenu.style.display="none";
    menuBar.style.display="block";
    header.style.opacity='1.0';
    mainContainer.style.opacity='1.0';
    footer.style.opacity='1.0';
});

menuBar.addEventListener("click",()=>{
    menuBar.style.display="none";
    mobileMenu.style.display="block";
    header.style.opacity='0.5';
    mainContainer.style.opacity='0.5';
    footer.style.opacity='0.5';
});

// スクロール監視用コールバック関数とクラス生成
const callback=function(entries,observer){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
        }
    });
}

const io=new IntersectionObserver(callback);