const teclado = document.querySelectorAll('.tecla')

teclado.forEach((tecla) =>{
    tecla.addEventListener('click', (evento)=>{
        const classes = evento.target.classList
        classes.forEach((classe)=>{
            if(classe.includes('_')){
                tocaSom('som_' + classe)
            }
        })
    })
    tecla.onkeydown = function (evento) {

        if(evento.code === 'Space' || evento.code === "Enter"){
            tecla.classList.add('ativa');
        }                                                                        
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
})

function tocaSom (id){
   const elemento = document.getElementById(id)

   if(elemento && elemento.localName === 'audio'){
    elemento.play();
   }else {
    console.log('Elemento não encontrado ou seletor inválido');
   }
}


