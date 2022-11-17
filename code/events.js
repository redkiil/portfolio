import { closeMenu, mobileMenu } from "./selectors.js";
import { toggleMobileMenu } from "./animations.js"

mobileMenu.addEventListener('click', () => toggleMobileMenu())
closeMenu.addEventListener('click', () => toggleMobileMenu())
