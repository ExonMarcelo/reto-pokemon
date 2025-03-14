import { useParams } from "react-router-dom";
import { useStorePokemons } from "../../../store/pokemons";
import { useEffect, useState } from "react";
import { getDetailPokemon } from "../../../utils/apiPokemon";

export default function useDetail(){
    const { id } = useParams();
    const {pokemonSelected, setPokemonSelected} = useStorePokemons();
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(()=>{
        getDetail()
    }, [])

    const getDetail = async () => {
            try {
                setIsLoading(true)
                if(!id){
                    return;
                }
                const resp = await getDetailPokemon(id)
                setPokemonSelected({
                    ...resp,
                    abilitiesMapped: resp?.abilities.map((itemType: any)=> itemType?.ability?.name),
                    typesMapped: resp?.types.map((itemType: any)=> itemType?.type?.name),
                    // typesMapped: resp?.types.map((itemType: any)=> itemType?.type?.name),
                    avatar: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
                })
                console.log("resp --->", resp)
            } catch (error) {
                console.log("Ocurrió un error", error)
            }
            finally{
                setIsLoading(false)
            }
        }

    return{
        isLoading, pokemonSelected
    }
}