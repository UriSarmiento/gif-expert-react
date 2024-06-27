import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../components/AddCategory"

describe('Pruebas en AddCategory', () => { 
    
    test('Debe de cambiar el valor de la caja de texto', () => { 
        render( <AddCategory onNewCategory={ () => {} }/> );
        const input = screen.getByRole('textbox'); // Obtenemos el elemento html del input

        fireEvent.input(input, {target: {value: 'Saitama'}}); // Lanzamos el evento de ingresar un valor en el input
        
        expect(input.value).toBe('Saitama'); // Validamos que el valor si haya cambiado, si no se tuviera la funcion que cambia el valor del input falla.

    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => { 
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn(); // Con esto Jest hace la simulacion de la funcion, toma la implementacion que se tiene en addCategory

        render( <AddCategory onNewCategory={ onNewCategory }/> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit( form ); // Lanzamos el submit

        expect( input.value ).toBe(''); // Cuando se hace el submit nuestro textbox se vacia
        expect( onNewCategory ).toHaveBeenCalledTimes(1); // Validamos si se llamo una sola vez la funcion
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue ); // Validamos si se llamo con el inputValue
     });

     test('No debe de llamar onNewCategory', () => { 
        const onNewCategory = jest.fn();
        
        render( <AddCategory onNewCategory={ onNewCategory }/> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.submit( form );

        expect( input.value ).toBe('');
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        //expect(onNewCategory).not.toHaveBeenCalled();
      });
     
 })