const iifeReproductor = (()=>{
    function funcionPrivada(id, url){
        document.querySelector(`#${id}`).setAttribute('src', url)
    }
    return { 
        insertarDatos(id, url){
            funcionPrivada(id, url)
        }
    }
})()

// iifeReproductor.insertarDatos('musica', "https://www.youtube.com/embed/NS9z2QHcZdY")
class Multimedia {
    #url;
    constructor(url){
        this.#url = url
    }

    get getUrl(){
        return this.#url;
    }
    setInicio(){
        return 'Este método es para realizar un cambio en la URL del video'
    }
}

class Reproductor extends Multimedia{
    constructor(url, id){
        super(url);
        this.id = id;
    }
    
    playMultimedia(){
        iifeReproductor.insertarDatos(this.id, this.getUrl)
    }
    setInicio(time){
        document.querySelector(`#${this.id}`).setAttribute('src', `${this.getUrl}?start=${time}`)
    }
}


const musica = new Reproductor(  "https://www.youtube.com/embed/NS9z2QHcZdY",'musica')
musica.playMultimedia()
musica.setInicio(65)
const pelicula = new Reproductor(  "https://www.youtube.com/embed/LfXTASYB14M",'peliculas')
pelicula.playMultimedia()
const serie = new Reproductor(  "https://www.youtube.com/embed/HN4oydykJFc",'series')
serie.playMultimedia()