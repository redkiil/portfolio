import { closeMenu, langIcon, mobileMenu } from "./selectors.js";
import { toggleMobileMenu } from "./animations.js"
import { toggleLanguage } from "./language.js"

mobileMenu.addEventListener('click', () => toggleMobileMenu())
closeMenu.addEventListener('click', () => toggleMobileMenu())
langIcon.addEventListener('click', () => toggleLanguage())