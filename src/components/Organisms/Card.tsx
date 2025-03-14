import { Link } from "react-router-dom"

interface IProps{
    id: string,
    name: string,
    avatar: string,
}
export default function Card({id, avatar, name}: IProps){
    return(
        <Link to={`/detail/${id}`} className="p-2 border-indigo-500 border-solid border-[2px] rounded-[16px] flex gap-2 flex-col items-center justify-center">
            <img src={avatar} alt={`image ${name}`} className="max-w-[120px] max-h-[120px]" />
            <span className="text-lg">{name}</span>
            {/* <button className="rounded-full bg-indigo-700 px-4 py-2 text-sm font-semibold text-white" type="button">Capturar</button> */}
        </Link>
    )
}