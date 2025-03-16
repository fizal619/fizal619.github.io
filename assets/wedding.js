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
