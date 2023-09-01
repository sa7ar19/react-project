import { useEffect , useState } from "react";
//a costum hook 
const useFetch = (url) => {
    const [ data, setData ] = useState(null);
    const [ isPending, setIsPending ] = useState(true);
    const [ error, setError ] = useState(null) ;

    useEffect(()=> {
        const controller = new AbortController();

        fetch(url, { signal: controller.signal })
        .then(res => {
            if(!res.ok){
                throw Error('Could not fetch the data for that resource')
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null); //if there is a break point maybe other data is work
            })
            .catch(err => {
                if(err.name === 'AbortError'){
                    console.log('fetch aborted')
                }else {
                    setIsPending(false);
                    setError(err.message);
                }
            })
            return () => controller.abort();
        }, [url]);

        return { data, isPending, error}
}
 
export default useFetch;