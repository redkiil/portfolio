import { closeMenu, hey, menu } from "./selectors.js"


export function executeFirstAnimations(){
    hey.classList.add("hey-active")
}
export function toggleMobileMenu(){
    if(menu.style.display == "none" || menu.style.display == ""){
        menu.style.display = "flex"
        closeMenu.style.display = "block"
    }else{
        menu.style.display = "none"
    }
}