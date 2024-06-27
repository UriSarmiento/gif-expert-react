import { GifItem } from "../../components/GifItem";
import { render, screen } from "@testing-library/react";

describe('Pruebas en GifItem', () => {

    const title = 'GifItem title';
    const url   = 'https://giphy.com/gifs/MDJ9IbxxvDUQM';

    test('Debe hacer match con el snapshot', () => {
        
        const {container} = render(<GifItem title = {title} url = {url} />)
        
        expect(container).toMatchSnapshot();

    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {
        
        render(<GifItem title = {title} url = {url} />);

        screen.debug();

        // expect( screen.getByRole('img').src ).toBe(url);
        // expect( screen.getByRole('img').alt ).toBe(title);

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );

    });

    test('Debe de mostrar el titulo en el componente', () => {

        render(<GifItem title = {title} url = {url} />);
        expect(screen.getByAltText(title)).toBeTruthy(); // Busca que el texto del titulo este renderizado en el componente

    });

 })