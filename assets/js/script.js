import {Reproductor} from './clases.js'
 
const musica = new Reproductor(  "https://www.youtube.com/embed/NS9z2QHcZdY",'musica')
musica.playMultimedia()
musica.setInicio(65)
const pelicula = new Reproductor(  "https://www.youtube.com/embed/LfXTASYB14M",'peliculas')
pelicula.playMultimedia()
const serie = new Reproductor(  "https://www.youtube.com/embed/HN4oydykJFc",'series')
serie.playMultimedia()