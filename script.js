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

const arquivos = {
    file1: {
        texto: ``
    },
    file2: {
        texto: ``
    },
    file3: {
        texto: `FILE #003 — RELATÓRIO DE MANUTENÇÃO

                LOCAL: Subsolo — Setor B <br>
                DATA: 12/10/1998 <br>
                RESPONSÁVEL: Equipe de Manutenção <br>
                STATUS: PENDENTE <br>

                Durante a inspeção de rotina, foi identificada uma falha no sistema de iluminação do corredor de acesso ao Setor B. <br>
                O problema ocorre de maneira intermitente, sempre acompanhado por interferências nos aparelhos de comunicação. <br>
                Dois funcionários relataram ouvir seus próprios nomes sendo chamados pelo rádio, apesar de não haver transmissões registradas na central.
                A substituição dos componentes elétricos não solucionou o problema. <br>
                RECOMENDAÇÃO: Suspender temporariamente o acesso ao corredor até a conclusão da análise técnica. <br>
                Solicitação de manutenção adicional: NEGADA.`
    },
    file4: {
        texto: `FILE 004 — TRANSCRIÇÃO DE ÁUDIO <br><br>

                IDENTIFICAÇÃO: FITA 07-B  <br>
                DATA: NÃO IDENTIFICADA  <br>
                ORIGEM: DESCONHECIDA  <br>
                DURAÇÃO: 00:42 <br><br>

                00:00 — Ruído estático. <br>

                00:06 — Som de passos sobre uma superfície rígida. <br>

                00:11 — Voz feminina não identificada: Você está me ouvindo? <br>

                00:17 — Silêncio. <br>

                00:23 — Voz feminina: Eu acho que tem alguém do outro lado. <br>

                00:29 — Interferência intensa. Trecho incompreensível. <br>

                00:36 — Voz feminina, sussurrando: Não desligue. <br>

                00:42 — Fim da gravação. <br>

                NOTA DO ARQUIVISTA: A fita foi encontrada sem identificação. A gravação original apresenta aproximadamente dois minutos de material magnético, embora apenas 42 segundos de áudio possam ser reproduzidos. <br>

                Análise adicional não autorizada.`
    }
}



function clicarArquivos(cards){
    const textoArquivos = document.querySelector("#descricaoArquivos");
    const blocoArquivos = document.querySelector("#arquivos-texto");

    if(cards === "d"){
        blocoArquivos.style.display = "block";
        textoArquivos.textContent = "";
        textoArquivos.innerHTML = arquivos["file4"].texto;
    } else if (cards == "c") {
        blocoArquivos.style.display = "block";
        textoArquivos.textContent = "";
        textoArquivos.innerHTML = arquivos["file3"].texto;
    } 

    
}



