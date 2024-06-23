//import { getGifs } from "../helpers/getGifs";
import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";


export const GifGrid = ({ category }) => {

const { images, isLoading } = useFetchGifs( category );

console.log(images);
  // Comentado porque se cambio al custom hook: useFetchGifs

  // const [images, setImages] = useState([]);

  // const getImages = async() => {
  //   const newImages = await getGifs( category );
  //   setImages(newImages);
  // }



  // // Lanzar la peticion HTTP solo cuando se cargue por primera vez
  // useEffect( () => {
  //   getImages();
  // },[] ); // Si el arreglo de dependencias se deja vacio, el hook solo se ejecuta la primera vez que se crea el componente


  return (
    <>
        <h3>{ category }</h3>
        {
          // isLoading
          // ? (<h2>Loading...</h2>)
          // : null

          isLoading && ( <h2>Loading...</h2> )
        }

        <div className="card-grid">
          {
            //images.map( ({ id, title }) => (
              images.map( ( image ) => (
             // <li key = { id }>{ title }</li>
             <GifItem key = {image.id}
                      { ...image } // asi se esparcen todas las properties
             />
            ))         
          }
       </div>
        
    </>
  );
}
