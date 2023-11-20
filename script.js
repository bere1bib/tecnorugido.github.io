// CODIGO PARA LA BARRA DE NAVEGACIÓN///////////////
const displayMenu = document.querySelectorAll(".show-display");
const navMenu = document.querySelectorAll(".nav-btn");
navMenu.forEach((menu, index) => {
  menu.addEventListener("click", () => {
    displayMenu.forEach((display) => (display.style.display = "none"));
    navMenu.forEach((border)=>{border.classList.remove('border-bottom')})
    navMenu.forEach((border)=>{border.style.textShadow='none'})
    displayMenu[index].style.display = "block";
    navMenu[index].classList.add('border-bottom');
    navMenu[index].style.textShadow='0 0 25px #ff8c00';
  });
});


// CODIGO PARA LA NAVEGACION EN PLAN DE ESTUDIOS///////////////////
const grados = document.querySelectorAll(".grado");
const cursos = document.querySelectorAll(".cursos");
grados.forEach((anioAct, index) => {
    anioAct.addEventListener("click", () => {
    cursos.forEach((curso) => (curso.style.display = "none"));
    grados.forEach((gradoColor) => (gradoColor.style.border = "none"));
    cursos[index].style.display = "flex";
    grados[index].style.borderBottom = "2px solid gold";
  });
});

// CODIGO PARA LA NAVEGACION EN LAN DE TRAMITES///////////////////
const tramites = document.querySelectorAll(".tramite");
const panel = document.querySelectorAll(".panel");
tramites.forEach((anioAct, index) => {
  anioAct.addEventListener("click", () => {
    panel.forEach((curso) => (curso.style.display = "none"));
    tramites.forEach((gradoColor) => (gradoColor.style.border = "none"));
    panel[index].style.display = "flex";
    tramites[index].style.borderBottom = "2px solid gold";
  });
});