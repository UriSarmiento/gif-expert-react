import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Pruebas en el hook useFetchGifs', () => { 

    const category = 'cat';

    test('Debe de regresar el estado inicial', () => { 
        const { result } = renderHook(() => useFetchGifs(category)); // Mediante el callback ejecutamos el hook y obtenemos el resultado
        const { images, isLoading } = result.current; // Desestructuramos para obtener las imagenes y el isLoading

        // Como es el estado inicial no va a traer imagenes y el isLoading va a ser cierto
        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
     });

     test('Debe de retornar un arreglo de imagenes y isLoading en false', async() => { 
        const { result } = renderHook( () => useFetchGifs( category ) );

        // Con el waitFor se espera a que el backend responda, asi podemos evaluar lo que recibimos
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0) // Espera a obtener al menos una imagen
        );

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

      });

 })