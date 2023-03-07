function openPopUp() {
  document.querySelector(".popup-nav").classList.add("popup-nav-visible")
}

function closePopUp() {
  document.querySelector(".popup-nav").classList.replace("popup-nav-visible","popup-nav")
}

document.querySelector(".menu_icon").addEventListener("click",openPopUp)
document.querySelector(".cancel-button").addEventListener("click",closePopUp)