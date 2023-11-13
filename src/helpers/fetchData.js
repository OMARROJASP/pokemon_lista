export const fetchData = async (endPoint) => {
    try{

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${endPoint}`)
        const data = await response.json();
        return{
            data,
            isLoading: false
        }
    }catch (e) {
        console.error(e);
    }
}