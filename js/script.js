document.addEventListener("DOMContentLoaded", function () {
    console.log("Saboaria Artesanal carregada!");
    
    const botoesComprar = document.querySelectorAll(".comprar");
    botoesComprar.forEach(botao => {
        botao.addEventListener("click", function () {
            alert("Produto adicionado ao carrinho!");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                }
            });
        },
        { threshold: 0.1 }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach((link) => {
        link.addEventListener("click", (event) => {
            event.preventDefault(); // Evita o comportamento padrão do link
            const targetId = link.getAttribute("href").substring(1); // Obtém o ID da seção
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                // Rola suavemente até a seção
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector("nav ul");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

);

document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    // Adiciona um evento de clique ao ícone hambúrguer
    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("active"); // Mostra ou esconde o menu
        hamburger.classList.toggle("open"); // Anima o ícone hambúrguer
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                }
            });
        },
        { threshold: 0.1 }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
});