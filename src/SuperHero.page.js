import { SingleSuperheroQuery } from "./Hooks/SingleSuperHero";
import { useParams } from "react-router-dom";

function SuperHeroPage() {

    const {id} = useParams()

    const { data , isLoading , isError, error } = SingleSuperheroQuery( id );

    if( isLoading ){
        return <h1>loading........</h1>;
    }

    if( isError ){
        return <h1>{error}</h1>;
    }

    return ( <>
     
       <div>
        { data?.name } - { data?.alterEgo } 
       </div>
        
    </> );
}

export default SuperHeroPage;


