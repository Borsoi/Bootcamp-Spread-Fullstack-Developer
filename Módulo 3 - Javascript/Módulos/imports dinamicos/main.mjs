const body = document.getElementsByTagName('body')[0];
const botao = document.getElementById("btn-troca-fundo")

const listener = function () {
    botao.addEventListener("click", async () =>{
        const {trocarFundo} = await import ("./trocaFundo.mjs");

        trocarFundo(body)
    } )
}

listener();
