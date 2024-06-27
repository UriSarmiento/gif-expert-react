import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../GifExpertApp";

describe('Pruebas en GifExpertApp', () => {

    test('Debe de mostrar el titulo "GifExpertApp en un h1', () => {

        const titulo = 'GifExpertApp';

        render(<GifExpertApp />);

        expect( screen.getByRole("heading", {level: 1}).innerHTML ).toContain(titulo);

     });

     test('Debe de mostrarse la categoria en pantalla', () => {

        const inputValue = 'Cat';        
        // const setState = jest.fn();

        // jest
        // .spyOn(React, 'useState')
        // .mockImplementationOnce( initState => [initState, setState] );

        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit( form ); // Lanzamos el submit

        expect(screen.getByText(inputValue)).toBeTruthy();

      });


      test('No debe de agregar categorias repetidas', () => {

        const inputValue = 'Cat';        

        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit( form ); // Lanzamos el submit

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit( form ); // Lanzamos el submit

        expect( screen.getAllByText(inputValue).length ).toBeLessThan( 2 );

      });

 });