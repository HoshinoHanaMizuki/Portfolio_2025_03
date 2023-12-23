const slides=document.querySelectorAll(".slide");
const selfIntro=document.querySelector("#selfIntroContainer");
const prevArrow=document.querySelector(".prevArrow");
const nextArrow=document.querySelector(".nextArrow");

// スクロール監視
io.observe(selfIntro);

// 端末サイズや画面の向きで画像を切り替える関数
function changeImage(){
  // デバイスの向きが変更されたときに実行したい処理を記述する(スマホ横サイズは除く)
  if (window.matchMedia("(orientation: landscape)").matches && window.matchMedia("(min-width: 700px)").matches) {
    // 横向きの場合の処理
    slides[0].src="../images/aboutme_1_PC.png";
    slides[1].src="../images/aboutme_2_PC.png";
    slides[2].src="../images/aboutme_3_PC.png";
    slides[3].src="../images/aboutme_4_PC.png";
  } 
  else if(window.matchMedia("(max-width: 700px)").matches){
    slides[0].src="../images/aboutme_1_tabsm.png";
    slides[1].src="../images/aboutme_2_tabsm.png";
    slides[2].src="../images/aboutme_3_tabsm.png";
    slides[3].src="../images/aboutme_4_tabsm.png";
  }
  else if (window.matchMedia("(orientation: portrait)").matches) {
    // 縦向きの場合の処理
    slides[0].src="../images/aboutme_1_tabsm.png";
    slides[1].src="../images/aboutme_2_tabsm.png";
    slides[2].src="../images/aboutme_3_tabsm.png";
    slides[3].src="../images/aboutme_4_tabsm.png";
  }
}

// クリックでスライドショーのz-indexの値をprevで-1,nextで+1(循環リスト)
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

document.addEventListener("DOMContentLoaded", function() {
  changeImage();
});

//画像は、PCサイズのときをデフォルトにしてタブレットサイズ以下と画面切り替え時のときはそれ用にパスを変更
window.addEventListener("orientationchange", () => {
  changeImage();
});
prevArrow.addEventListener("click",()=>{
  changeSlide(-1,slides);
});
nextArrow.addEventListener("click",()=>{
  changeSlide(1,slides);
});