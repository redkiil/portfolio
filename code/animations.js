import { closeMenu, menu, langIcon } from "./selectors.js"

export function toggleMobileMenu(){
    if(menu.style.display == "none" || menu.style.display == ""){
        menu.style.display = "flex"
        closeMenu.style.display = "block"
        langIcon.style.display = "block"
    }else{
        menu.style.display = "none"
        langIcon.style.display = "none"

    }
}