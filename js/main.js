window.addEventListener('load', function(){
    new Glider(document.querySelector('.carousel-lista'), {
            rewind: true,
            slidesToShow: 1,
            dots: '.carousel-indicadores',
            arrows: {
            prev: '.carousel-prev',
            next: '.carousel-next'
        },
        responsive: [
            {
                // screens greater than >= 800px
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            },{
                // screens greater than >= 1024px
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
            }
            }
        ]
    });
});

let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("java");
        habilidades[1].classList.add("python");
        habilidades[2].classList.add("c");
        habilidades[3].classList.add("cplus");
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("js");
        habilidades[6].classList.add("htmlcss");
        habilidades[7].classList.add("php");
        habilidades[8].classList.add("arduino");
    }
}

//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 