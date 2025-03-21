const menuButtons = document.querySelectorAll(".menu");
let currentTab = "ceremony";

menuButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const page = document.getElementById(button.dataset.tab);
    document.getElementById(currentTab).classList.toggle("active");
    document.getElementById(currentTab+"Btn").classList.toggle("active");
    page.classList.toggle("active");
    currentTab = button.dataset.tab;
    button.classList.toggle("active");
  });
});


const yesbtn = document.getElementById("yesbtn");
const nobtn = document.getElementById("nobtn");
const banner = document.querySelector(".banner");
const content = document.querySelector(".content");

if (localStorage.getItem("secret")){
  banner.style.display = "none";
  content.style.display = "block";
}

yesbtn.addEventListener("click", () => {
  banner.style.display = "none";
  content.style.display = "block";
  localStorage.setItem("secret", "yes");
});

nobtn.addEventListener("click", () => {
  location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
});
