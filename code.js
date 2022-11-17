document.addEventListener('DOMContentLoaded', function() {
    var windowWidth = window.screen.width < window.outerWidth ?
    window.screen.width : window.outerWidth;
    var mobile = windowWidth < 500;
    let hey = document.querySelector('.hey')
    hey.classList.add("hey-active")


    if(!mobile){
        let handle = 0;
        let elements = document.querySelectorAll("[data-project]")
        let reference = elements.length * 100
        console.dir(elements[0])
        
        close.onclick = function(){
            modal.style.display = "none"
        }
        let animateProject = (e) => {
            try{
                if(!e.target.offsetParent.classList.contains('project-container'))return;
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
            }catch(e){}
            
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