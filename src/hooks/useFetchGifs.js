import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async() => {
        const newImages = await getGifs( category );
        setImages(newImages);
        setIsLoading(false);
    }
    // Lanzar la peticion HTTP solo cuando se cargue por primera vez
    useEffect( () => {
        getImages();
    },[] ); // Si el arreglo de dependencias se deja vacio, el hook solo se ejecuta la primera vez que se crea el componente


    return {
        // Cuando se tiene una propiedad que apunta hacia su mismo nombre puede ponerse de esta manera
        images,
        // En vez de images: images,
        isLoading
    }
}
