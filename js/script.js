document.addEventListener("DOMContentLoaded", function () {
    console.log("Saboaria Artesanal carregada!");
    
    const botoesComprar = document.querySelectorAll(".comprar");
    botoesComprar.forEach(botao => {
        botao.addEventListener("click", function () {
            alert("Produto adicionado ao carrinho!");
        });
    });
});
