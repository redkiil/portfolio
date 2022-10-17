document.addEventListener('DOMContentLoaded', function() {
    var windowWidth = window.screen.width < window.outerWidth ?
    window.screen.width : window.outerWidth;
    var mobile = windowWidth < 500;
    if(!mobile){
        let handle = 0;
        let elements = document.querySelectorAll("[data-project]")
        let button = document.querySelector(".btn-whoiam")
        let modal = document.querySelector(".modal")
        let close = document.querySelector(".close")

        let reference = elements.length * 100
        
        button.onclick = function() {
            modal.style.display = 'block'
        }
        close.onclick = function(){
            modal.style.display = "none"
        }
        let animateProject = (e) => {
            console.log((typeof e === 'undefined'))
            handle += (typeof e === 'undefined') ? 0 : e.deltaY;
            var n = (handle + reference) % reference;
            handleElement = (n / 100)
            if(handleElement<elements.length)
            {
                elements.forEach((e, idx) => {
                    if(idx == handleElement){
                        e.classList.add("project-show")
                        e.style.zIndex = 1
                    }else{
                        e.classList.remove("project-show")
                        e.style.zIndex = 0
                    }
                })
            }
        }

        window.addEventListener('wheel', (e) => animateProject(e))
        animateProject()

        setTimeout(() => {
            document.querySelector('.mousescroll').classList.add('mousescroll-show') 
        }, 1);
        setTimeout(() => {
            document.querySelector('.mousescroll').classList.remove('mousescroll-show') 
        }, 5000);
    }else{

        let mobileMenu = document.querySelector('.mobile-menu')
        let closeMenu = document.querySelector('.close-menu')
        let menu = document.querySelector('.menu')
        let button = document.querySelector(".btn-whoiam")
        let modal = document.querySelector('.modal')
        let modalClose = document.querySelector('.close')


        modalClose.addEventListener('click', () => {
            modal.style.display = "none"
        })
        mobileMenu.onclick = function(){
            menu.style.display = "flex"
            closeMenu.style.display = "block"
        }
        closeMenu.onclick = function(){
            menu.style.display = "none"

        }
        button.onclick = function() {
            menu.style.display = "none"
            modal.style.display = "block"
        }

    }
 }, false);