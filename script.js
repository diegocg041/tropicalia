document.addEventListener('DOMContentLoaded',function(){

    const botaoDeAcessibilidade=document.getElementById('botao-acessibilidade');
    const opcoesDeAcessbilidade=document.getElementById('opcoes-acessibilidade');
    
    botaoDeAcessibilidade.addEventListener('click',function(){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessbilidade.classList.toggle('apresenta-lista');
    
    const botaoSelecionado=botaoDeAcessibilidade.getAttribute('aria-expanded')=== 'true';
    
    botaoDeAcessibilidade.setAttribute('aria-expanded',!botaoSelecionado)

    })


const aumentarForteBotao = document.getElementById('aumentar-fonte');
const diminuiFonteBotao = document.getElementById('diminui-fonte');
const alternaConstraste = document.getElementById('alterna-contraste');
})