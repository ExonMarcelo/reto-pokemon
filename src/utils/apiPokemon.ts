const BASE_URL = "https://pokeapi.co/api/v2"

export const getPokemons = async () => {
    const resp = await fetch(`${BASE_URL}/pokemon?offset=1&limit=20`)
    const data = resp.json()
    return data;
}

export const getDetailPokemon = async (id: string) => {
    const resp = await fetch(`${BASE_URL}/pokemon/${id}`)
    const data = resp.json()
    return data;
}