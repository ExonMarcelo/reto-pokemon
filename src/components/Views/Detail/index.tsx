import useDetail from "./useDetail"

export default function Detail(){
    const {isLoading, pokemonSelected} = useDetail()
    return(
        <div>
            {
                isLoading?
                <p>Cargando...</p>
                :
                <div className="flex gap-8">
                    <div className="flex gap-2 flex-col items-center justify-center">
                        <img src={pokemonSelected?.avatar} alt={pokemonSelected?.name} className="max-w-[240px] max-h-[240px]" />
                        <p className="text-2xl">{pokemonSelected?.name}</p>
                    </div>
                    <div>
                        <div>
                            <h4 className="text-xl">Abilities:</h4>
                            <p>{pokemonSelected?.abilitiesMapped?.join(",")}</p>
                        </div>
                        <div>
                            <h4 className="text-xl">types:</h4>
                            <p>{pokemonSelected?.typesMapped?.join(",")}</p>
                        </div>
                        {/* <div className="mt-2">
                            <h4 className="text-xl">Forms:</h4>
                            <p>{pokemonSelected?.typesMapped?.join(",")}</p>
                        </div> */}
                    </div>
                </div>
            }
        </div>
    )
}