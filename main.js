const totop = () => window.scroll({
  top: 0, left: 0, behavior: "smooth"
});
const togtop = () => { if (window.scrollY >= 300) {
  document.getElementById("backtop").classList.add("show");
} else {
  document.getElementById("backtop").classList.remove("show");
}};
window.addEventListener("scroll", togtop);
window.addEventListener("resize", togtop);



function openPopup(imageUrl) {
  window.open(imageUrl, '_blank', 'width=800,height=600');
}
