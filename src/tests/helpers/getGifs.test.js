import { getGifs } from "../../helpers/getGifs";

describe('Pruebas en getGifs', () => {

    test('Debe de retornar un arreglo de Gifs', async() => {

        const gifs = await getGifs('One Punch');
        
        expect( gifs.length ).toBeGreaterThan( 0 ); // Valido que me este regresando al menos un elemento

        expect(gifs[0]).toEqual({ // Valido el primer elemnto del arreglo, que tenga la estructura esperada, solo que traiga cualquier string en cada parametro
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });

    });
});