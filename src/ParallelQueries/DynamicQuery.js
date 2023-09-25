import axios from "axios";
import { useQueries } from "react-query";



const fetchSuperhero = async ( id )=> {

        try {

            const link = (await axios.get(`http://localhost:4000/superheroes/${id}`)).data;
            return link
            

        }catch (err){
            throw new Error( 'this is the error' + err.message );
        }

}


export const DynamicQuery = ( {prop1} )=> {


    const resultQueries = useQueries( prop1.map( (id)=> {
        return {
            queryKey : [ 'array-key', id ],
            queryFn : ()=>fetchSuperhero(id),
        }
    } ) )

    const data1 = resultQueries[0];




    return <>
        <div>{ data1?<p>{data1.id}</p> : <h2>loding..</h2> }</div>
    </>

}