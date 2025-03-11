function playGame(e) {

  if (location.pathname != "/") {
    window.removeEventListener("keyup", playGame);
    document.body.removeEventListener("click", playGame);
    return;
  }

  if (!document.querySelector(".banner") && !document.querySelector(".mobile-banner")) {
    window.removeEventListener("keyup", playGame);
    document.body.removeEventListener("click", playGame);
    return;
  }

  if (e.keyCode == 13 || e.type == "click") {
    document.querySelector(".banner").style.display = "none";
    document.querySelector(".mobile-banner").style.display = "none";

    document.querySelector(".content").classList.add("transition-1s");
    document.querySelector(".tagline").classList.add("transition-2s");
    document.querySelector(".socials").classList.add("transition-3s");


  }
  window.removeEventListener("keyup", playGame);
  document.body.removeEventListener("click", playGame);
}

window.addEventListener("keyup", playGame);
document.body.addEventListener("click", playGame);
