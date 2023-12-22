const slides=document.querySelectorAll(".slide");
const prevArrow=document.querySelector(".prevArrow");
const nextArrow=document.querySelector(".nextArrow");

console.log(slides);
console.log(slides[0].src);
console.log(slides[0].width);

//画像は、PCサイズのときをデフォルトにしてタブレットサイズ以下のときはそれ用にパスを変更
if(slides[0].width <= 600 || window.matchMedia("(orientation: portrait)").matches){
  slides[0].src="../images/aboutme_1_tabsm.png";
  slides[1].src="../images/aboutme_2_tabsm.png";
  slides[2].src="../images/aboutme_3_tabsm.png";
  slides[3].src="../images/aboutme_4_tabsm.png";
}
else{
  slides[0].src="../images/aboutme_1_PC.png";
  slides[1].src="../images/aboutme_2_PC.png";
  slides[2].src="../images/aboutme_3_PC.png";
  slides[3].src="../images/aboutme_4_PC.png";
}


// クリックでz-indexの値をprevで-1,nextで+1
function changeSlide(changeNum,slides){
  for(let i=0; i<slides.length; i++){
    console.log(i+1+"枚目だよ");
    console.log(window.getComputedStyle(slides[i]).zIndex);
    slides[i].style.zIndex = (parseInt(window.getComputedStyle(slides[i]).zIndex) + slides.length + changeNum) % slides.length;
    if(slides[i].style.zIndex==0){
      slides[i].style.zIndex=slides.length;
    }
    console.log(slides[i].style.zIndex);
  }
}
prevArrow.addEventListener("click",()=>{
  changeSlide(-1,slides);
});
nextArrow.addEventListener("click",()=>{
  changeSlide(1,slides);
});
