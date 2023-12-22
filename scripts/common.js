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