import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";


function PaginatedQuery() {

    const [pageno, setPageno] = useState(1);

        const fetchLink = async(pageno)=>{
            const linkData =( await axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageno}`)).data;
            return linkData;
        }


    
        const { data , isLoading , isError , error,isFetching } = useQuery( ['link-key',pageno], () => fetchLink(pageno) , {
            keepPreviousData:true
        } )
             

        if( isError ){
            return <h2>{error.message}</h2>
        }  

        if( isLoading ){
            return <h2>Loading...</h2>
        }  

     

    return (


        
        <>
    { data && data.map( (item) => {
        return <h2>{item.label}</h2>
    } ) } 

        <div className="btn_grp flex flex-row-reverse justify-between mt-5">
            <button onClick={ ()=>{ setPageno( pageno + 1 ) } } disabled={ pageno === 4 } className="bg-lime-400 w-fit px-4 rounded-lg next">Next</button>
            <button onClick={ ()=>{ setPageno( pageno - 1 ) } } disabled={ pageno === 1 }  className="bg-lime-400 w-fit px-4 rounded-lg prev">Previous</button>
        </div>

    {isFetching && 'loading....' }

    </>
    
    );
}

export default PaginatedQuery;