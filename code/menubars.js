const menubars = document.getElementById('menu_bars');
const menu_mobile = document.getElementById('menu_mobile');

menubars.addEventListener('click', () => {
    menu_mobile.classList.add('display_menu')
})

const x = document.getElementById('close');

x.addEventListener('click', ()=> {
    menu_mobile.classList.remove('display_menu');
})