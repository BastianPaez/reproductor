export const iifeReproductor = (()=>{
    function funcionPrivada(id, url){
        document.querySelector(`#${id}`).setAttribute('src', url)
    }
    return { 
        insertarDatos(id, url){
            funcionPrivada(id, url)
        }
    }
})()
