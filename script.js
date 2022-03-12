const HAMBURGER_ICON = "images/icon-hamburger.svg"
const CLOSE_ICON = "images/icon-close.svg"

const dropdownToggle = document.querySelector(".dropdown-toggle")
const dropdownMenu = document.querySelector(".dropdown-menu")

let isDropdownActive = false

dropdownToggle.addEventListener("click", () => {
    isDropdownActive = !isDropdownActive

    if (isDropdownActive) {
        dropdownToggle.src = CLOSE_ICON
    } else {
        dropdownToggle.src = HAMBURGER_ICON
    }

    dropdownMenu.classList.toggle("active", isDropdownActive)
})