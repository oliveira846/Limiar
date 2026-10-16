const personagens = {
    miriam: {
        nome: "Miriam",
        imagem: "images/miriam_retrato_semfundo.png",
        descricao: "Especialista em restauração de áudio, Miriam chega a Santa Áurea após receber uma gravação misteriosa."
    },

    elisa: {
        nome: "Elisa",
        imagem: "images/elisa_retrato_semfundo.png",
        descricao: "Uma jovem cujo desaparecimento permanece sem explicação. Sua história está cercada de mistérios."
    },

    helena: {
        nome: "Helena",
        imagem: "images/helena_voss_semfundo.png",
        descricao: "Uma pesquisadora ligada ao enigmático Projeto Limiar."
    },

    samuel: {
        nome: "Samuel",
        imagem: "images/sanuel_retrato_semfundo.png",
        descricao: "Antigo vigia do hospital, Samuel conhece histórias que muitos prefeririam esquecer."
    },

    tomas: {
        nome: "Tomás",
        imagem: "images/tomas_retrato_semfundo.png",
        descricao: "Um ex-investigador que nunca abandonou os mistérios de Santa Áurea."
    }
};

// Selecionando os elementos HTML
const cards = document.querySelectorAll(".cards-personagens");

const imagem = document.getElementById("imagem-personagem");
const nome = document.getElementById("nome-personagem");
const descricao = document.getElementById("descricao-personagem");


// Adicionando um evento de clique a cada card
cards.forEach(function(card) {

    card.addEventListener("click", function() {

        const personagemSelecionado = card.dataset.personagem;
        const dados = personagens[personagemSelecionado];

        // Remove a seleção de todos os cards
        cards.forEach(function(outroCard) {
            outroCard.classList.remove("selecionado");
        });

        // Seleciona o card clicado
        card.classList.add("selecionado");

        // Atualiza as informações
        imagem.src = dados.imagem;
        imagem.alt = "Retrato de " + dados.nome;

        nome.textContent = dados.nome;
        descricao.textContent = dados.descricao;

    });

});


