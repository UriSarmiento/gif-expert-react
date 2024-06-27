import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => { 

    const category = 'One Punch';

    test('Debe de mostrar el loading inicialmente', () => {

            useFetchGifs.mockReturnValue({
                images: [],
                isLoading: true
            });

            render( <GifGrid category= {category} /> );
            expect(screen.getByText( 'Loading...' ));
            expect(screen.getByText( category ));

     });
     
     test('Debe de mostrar items cuando se cargan las imagenes mediante useFetchGifs', () => { 
        
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
    ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        });
        
        render( <GifGrid category= {category} /> );

        expect( screen.getAllByRole('img').length ).toBe(2);

      });

 })