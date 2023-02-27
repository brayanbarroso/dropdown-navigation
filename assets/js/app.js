const hamburguerIcon = document.querySelector('.nav__hamburguer');
const navOverlay     = document.querySelector('.nav__overlay');

// Evento para mostrar el menu en dispositivos moviles
hamburguerIcon.addEventListener('click',()=>{
    hamburguerIcon.classList.toggle('nav__hamburguer--open');

    navOverlay.classList.toggle('nav__overlay--show')
});

// Evento para mostrar el submenu en sispositivos moviles
navOverlay.addEventListener('click',(e)=>{
    e.preventDefault();
    const currentElement = e.target;
    // console.log(e.target.classList.value);
    if(isActive(currentElement,'nav__parent')){
        const subMenu = currentElement.parentElement.children[1];
        console.log(subMenu);
        if(window.innerWidth < 768){
let height = (subMenu.clientHeight == 0) ? subMenu.scrollHeight : 0;

subMenu.style.height = `${height}px`;
        }else{

        }
    }
});

function isActive(element, string){
    return element.classList.value.includes(string);
}