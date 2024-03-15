class Multimedia {
    #url;
    constructor(url){
        this.#url = url
    }

    get getUrl(){
        return this.#url;
    }
    setInicio(){

    }
}

class Reproductor extends Multimedia{
    constructor(url, id){
        super(url);
        this.id = id;
    }
    
    playMultimedia(){

    }
    setInicio(){

    }
}