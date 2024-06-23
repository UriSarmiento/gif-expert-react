
import { useState } from "react";
import { AddCategory, GifGrid } from "./components/";

export const GifExpertApp = () => {


  const [categories, setCategories] = useState([]); // Lo inicializamos como un arreglo, en este caso con la categoria One Punch
  
  const onAddCategory = ( newCategory ) => {
    // Tomo el arreglo inicial y le arreglo el valor al final
    //setCategories(()=> [...categories,'Valorant']);
    //setCategories(['Valorant', ...categories]);
    if(categories.includes(newCategory)) return;
    setCategories([ newCategory, ...categories ]);
  };

  return (
    <>
        {/* Titulo */}
        <h1>GifExpertApp</h1>
        {/* Input */}

        <AddCategory 
        //setCategories = { setCategories }
          onNewCategory = { onAddCategory }
        />
        
        {/* Listado de Gif */}
        {/*<button onClick={onAddCategory}>Agregar</button>*/}
        {/*<ol>*/}
          {
              categories.map( (category) => (
                // return <li key = { category }>{category}</li>
   
                // <div key = {category}>
                //     <h3>{ category }</h3>
                //     <li>{ category }</li>
                //   </div>
                <GifGrid key = {category} category={category}/>
              ))
       }
          
        {/*</ol>*/}
        {/* Gif Item */}
    </>
    
  );
};
