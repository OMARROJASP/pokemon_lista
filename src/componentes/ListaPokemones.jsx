import {useFetchData} from "../hooks/useFetchData.js"
import {useState} from "react";

export const ListaPokemones=({endPoint})=> {

    const [name, setName] = useState("")
    const [id, setId] = useState()
    const [img, setImg] = useState("")

    const {data, isLoading } = useFetchData(endPoint)
   console.log(data.name)



    return(
        <>
            <ul>
                {isLoading? <p>Cargando informacion...</p>
                    : <li key={data.id}>
                        <hi>{data.name}</hi>
                        <br/>
                        <img src={data.sprites.front_default}/>

                    </li>

                 }
            </ul>
        </>
    )
}