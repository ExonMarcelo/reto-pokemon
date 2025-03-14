import { useEffect, useState } from "react"
import { getPokemons } from "../../../utils/apiPokemon"
import { useStorePokemons } from "../../../store/pokemons";
import { getId } from "../../../utils/helpers";

export default function useMain(){
    const {pokemons, setPokemons} = useStorePokemons();
    const [isLoading, setIsLoading] = useState<boolean>(false)

    useEffect(()=>{
        getDataPokemons()
    }, [])

    const getDataPokemons = async () => {
        try {
            setIsLoading(true)
            const resp = await getPokemons()
            const dataMapped = resp?.results?.map((itemPokemon: any)=>{
                const id = getId(itemPokemon?.url || "")
                return {
                    ...itemPokemon,
                    id: id,
                    avatar: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
                }
            })
            setPokemons(dataMapped || [])
        } catch (error) {
            console.log("Ocurrió un error", error)
        }
        finally{
            setIsLoading(false)
        }
    }

    return{
        isLoading, pokemons
    }
}