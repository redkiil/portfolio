document.addEventListener('DOMContentLoaded', function() {
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


 }, false);