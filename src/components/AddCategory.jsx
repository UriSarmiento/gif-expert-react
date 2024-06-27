// rafc para crear rapido el functional component

import { useState } from 'react';
import PropTypes from 'prop-types';

//export const AddCategory = ({setCategories}) => {
export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');
  
  const onInputChange = ({target}) => {
    setInputValue(target.value); //El target es el input como tal, entonces usamos el valor del target para actualizar el inputvalue
  };

  const onSubmit = (event) => {

    const newInputValue = inputValue.trim();

    event.preventDefault();//Para evitar que se este haciendo reset cuando hagamos submit (enter)
    if(newInputValue.length < 1) return; // Checa si el valor ingresado tiene al menos una letra. El trim quita los espacios en blanco.
    
    //setCategories( categories => [ newInputValue, ...categories ]);
    onNewCategory(newInputValue);
    setInputValue('');
  };

  // return (
  //   <form onSubmit={(event) => onSubmit(event)}>
  //     <input
  //       type = "text"
  //       placeholder = "Buscar Gifs"
  //       value= { inputValue }
  //       onChange={ (event) => onInputChange(event) }
  //     />
  //   </form>
  // );
  return (
    <form onSubmit={ onSubmit } aria-label="form">
      <input
        type = "text"
        placeholder = "Buscar Gifs"
        value= { inputValue }
        onChange={ onInputChange }
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}