//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
document.addEventListener("DOMContentLoaded", () => {
    const inputAmigo = document.getElementById("amigo");
    const btnAdicionar = document.getElementById("btnAdicionar");
    const btnSortear = document.querySelector(".button-draw");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    
    let amigos = [];

    // Adicionar amigo à lista
    btnAdicionar.addEventListener("click", () => {
        const nome = inputAmigo.value.trim();
        if (nome === "") {
            alert("Adicione um nome");
            return;
        }
        
        if (amigos.includes(nome)) {
            alert("Este nome já foi adicionado!");
            return;
        }
        
        amigos.push(nome);
        atualizarLista();
        inputAmigo.value = "";
        inputAmigo.focus();
    });

    // Atualizar a lista de amigos na tela
    function atualizarLista() {
        listaAmigos.innerHTML = "";
        amigos.forEach(nome => {
            const li = document.createElement("li");
            li.textContent = nome;
            listaAmigos.appendChild(li);
        });
    }

    // Sortear amigo secreto e exibir apenas um nome
    btnSortear.addEventListener("click", () => {
        if (amigos.length < 2) {
            alert("Adicione pelo menos dois amigos para realizar o sorteio.");
            return;
        }
        
        // Sorteio aleatório de um nome
        const indice = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indice];
        
        exibirResultado(amigoSorteado);
    });

    // Exibir resultado do sorteio (apenas um nome)
    function exibirResultado(amigoSorteado) {
        resultado.innerHTML = ""; // Limpa resultados anteriores
        const li = document.createElement("li");
        li.textContent = amigoSorteado; // Exibe apenas o nome sorteado
        resultado.appendChild(li);
    }
});
