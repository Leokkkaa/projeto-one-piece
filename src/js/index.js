const botoes = document.querySelectorAll('.botao');

const personagens = document.querySelectorAll(".personagem");






botoes.forEach((botao, indice) => {
    botao.addEventListener("click",() => {
        desselecionarbotao();
        desselecionarpersonagem();
        
        
        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");

    })
});



function desselecionarpersonagem() {
    const personagemSelecionado = document.querySelector(".personagem.selecionado");

    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarbotao() {
    const botaoselecionado = document.querySelector(".botao.selecionado");
    botaoselecionado.classList.remove("selecionado");
}

