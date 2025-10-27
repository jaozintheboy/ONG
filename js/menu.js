document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menu-btn");
  const menu = document.getElementById("menu");
  if (menuBtn && menu) menuBtn.addEventListener("click", () => menu.classList.toggle("open"));
document.getElementById("contrasteBtn").addEventListener("click", () => {
  document.body.classList.toggle("alto-contraste");
});
});