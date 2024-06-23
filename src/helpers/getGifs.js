export const getGifs = async(category) => {
    const limit = 20;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=f71rKEyZJAbWBIeq4Y21WHpyWQbugxI3&q=${ category }&limit=${limit}`;
    const resp = await fetch(url);
    const {data} = await resp.json();
  
    const gifs = data.map( img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url  // taken from the response of the endpoint
    }));
    return gifs;
  }
  