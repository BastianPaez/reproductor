import {iifeReproductor} from './iife.js';

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

 export class Reproductor extends Multimedia{
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