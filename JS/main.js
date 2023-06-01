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
})

function tocaSom (id){
   document.getElementById(id).play()
}
