const lang=document.querySelector("#langContainer");
const tool=document.querySelector("#toolContainer");
const dev=document.querySelector("#devContainer");

// スクロール監視
io.observe(lang);
io.observe(tool);
io.observe(dev);