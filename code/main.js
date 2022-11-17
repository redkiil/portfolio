import { executeFirstAnimations } from './animations.js'
import {} from "./events.js"
import {} from "./language.js"

const app = async () => {
    executeFirstAnimations()
};

document.addEventListener("DOMContentLoaded", app);