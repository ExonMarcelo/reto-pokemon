import create from 'zustand';

export interface IPokemons {
    pokemons: any[],
    setPokemons: (data: any[]) => (void),
    pokemonSelected: any
    setPokemonSelected: (data: any[]) => (void),
}

export const useStorePokemons = create<IPokemons>((set, _get) => ({
    pokemons: [],
    setPokemons: (data: any[]) => {
        set({
            pokemons: data
        })
    },
    pokemonSelected: null,
    setPokemonSelected: (data: any) => {
        set({
            pokemonSelected: data
        })
    },
}));