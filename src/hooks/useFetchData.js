import {useEffect, useState} from "react";
import {fetchData} from "../helpers/fetchData.js";

export const useFetchData=(endPoint)=> {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const obtenerFetch = async ()=> {
        const {data, isLoading} = await fetchData(endPoint)
        setData(data)
        setIsLoading(isLoading)
        console.log(data)
    }

    useEffect(() => {
        obtenerFetch()
    }, [endPoint]);

    return{
        data,
        isLoading
    }
}