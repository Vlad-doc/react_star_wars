export const getApiResource = async (url) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      console.error('Cold not fetch', response.status)
      return false
    }
    return await response.json();
  } catch (error) {
    console.error('Cold not fetch', error.message)
    return false
  }
}


// (async () => {
//   const data = await getApiResource(`${SWAPI_ROOT}/${SWAPI_PEOPLE}`)
//   console.log(data)
// })()

// const body = getApiResource(`${SWAPI_ROOT}/${SWAPI_PEOPLE}`);
// console.log(body)
