//Configuraciones para el nav desplegable 

const btnBurger = document.querySelector('.btn_burger');
const nav = document.querySelector('.nav');
const header = document.querySelector('.header');
const main = document.querySelector('.main');
var abrirNav = false;

btnBurger.addEventListener('click', function(evet) {
    
    if(abrirNav ===false){
        header.style.height = '10rem'
        main.style.marginTop = '10rem'
        abrirNav = true
    }else{
        header.style.height = '7rem'
        main.style.marginTop = '7rem'
        abrirNav = false;
    }
})
