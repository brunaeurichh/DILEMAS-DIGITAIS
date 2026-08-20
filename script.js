// MENU MOBILE

function abrirMenu() {
    const menu = document.getElementById("menu");

    menu.classList.toggle("ativo");
}


// FECHAR MENU AO CLICAR EM UM LINK

const links = document.querySelectorAll("#menu a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("menu").classList.remove("ativo");

    });

});


// MENSAGEM DE REFLEXÃO

function mostrarMensagem() {

    const mensagem = document.getElementById("mensagem");

    mensagem.textContent =
        "A tecnologia deve estar nas nossas mãos, e não controlar nossas vidas. Que tal começar diminuindo alguns minutos de tela por dia?";

}


// EFEITO AO ROLAR A PÁGINA

const elementos = document.querySelectorAll(".card, .solution, .impactos div");

const observador = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


elementos.forEach(function(elemento) {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(30px)";
    elemento.style.transition = "0.6s";

    observador.observe(elemento);

});// MENU MOBILE

function abrirMenu() {
    const menu = document.getElementById("menu");

    menu.classList.toggle("ativo");
}


// FECHAR MENU AO CLICAR EM UM LINK

const links = document.querySelectorAll("#menu a");

links.forEach(function(link) {

    link.addEventListener("click", function() {

        document.getElementById("menu").classList.remove("ativo");

    });

});


// MENSAGEM DE REFLEXÃO

function mostrarMensagem() {

    const mensagem = document.getElementById("mensagem");

    mensagem.textContent =
        "A tecnologia deve estar nas nossas mãos, e não controlar nossas vidas. Que tal começar diminuindo alguns minutos de tela por dia?";

}


// EFEITO AO ROLAR A PÁGINA

const elementos = document.querySelectorAll(".card, .solution, .impactos div");

const observador = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


elementos.forEach(function(elemento) {

    elemento.style.opacity = "0";
    elemento.style.transform = "translateY(30px)";
    elemento.style.transition = "0.6s";

    observador.observe(elemento);

});