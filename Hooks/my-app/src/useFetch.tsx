import { useState, useEffect} from "react";

export const useFetch = <T,>(url:string) =>{
    const [data, setData] = useState<T | null> (null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=>{
        const fetchData = async () => {
            try{
                const response = await fetch (url);
                if(!response.ok){
                    throw new Error ("try again!");
                }
                const result: T = await response.json();
                setData(result);
            }
            catch (err:any){
                setError(String(err));
            }
            finally{
                setLoading (false);
            }
        };
        fetchData();
    }, [url]);

    return{data,loading,error};
}

