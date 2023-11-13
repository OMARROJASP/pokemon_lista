import {useState} from "react";
import {ListaPokemones} from "./componentes/ListaPokemones.jsx";

export const Pokemon = () => {

    const [endPoint, setEndPoint] = useState(1);

    return(
        <>
            <h1>Lista de Pokemones</h1>
            <ListaPokemones endPoint={endPoint}></ListaPokemones>
        </>
    )
}