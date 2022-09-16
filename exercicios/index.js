var a = document.getElementById('area')
a.addEventListener('click', clicar)
a.addEventListener('mouseover', entrar)
a.addEventListener('mouseout', sair)
 /* Teste */
    function clicar()
    {
        var a = document.getElementById('area')
        a.innerText = 'Clicou'
        a.style.background = 'red'
    }
    function entrar(){
        var a = document.getElementById('area')
        a.innerText = 'Entrou!'
        a.style.background = 'blue'
    }
    function sair(){
        var a = document.getElementById('area')
        a.innerText = 'Saiu!'
        a.style.background = 'green'
    }
