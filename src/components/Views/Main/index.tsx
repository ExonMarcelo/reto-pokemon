// import { useStorePokemons } from "../../../store/pokemons"
import Card from "../../Organisms/Card"
import useMain from "./useMain"

export default function Main(){

    const {isLoading, pokemons} = useMain()
    

    return(
        <div>
            <h1 className="text-xl bold">Pokemons</h1>
            <div className="mt-4 grid grid-cols-4 gap-4">
                {
                    isLoading ?
                    <p>Cargando...</p>
                    :
                    pokemons.map((itemPokemon: any)=>
                        <Card 
                            id={itemPokemon?.id} 
                            name={itemPokemon?.name} 
                            avatar={itemPokemon?.avatar} 
                        />
                    )
                }
            </div>
        </div>
    )
}