//procurar o botao
document.querySelector("#add-time")
//quando clicar no botao
.addEventListener('click', cloneField)


//executar uma acao
function cloneField(){
    // duplicar os campos // qual campo ?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean para pegar os elementos filhos da div 

    //limpar os campos // que campos ?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo,limpar
    fields.forEach(function(field){
        //pegar o fild do momento
        field.value = ""
    })

    //colocar na pagina // aonde na pagina ?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    