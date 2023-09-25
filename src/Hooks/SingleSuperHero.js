// make a custome react query hook 

import axios from "axios"
import { useQuery } from "react-query"


// functionSingle()

const functionSingle = async (heroId)=> {

    return (await axios.get(`http://localhost:4000/superheroes/${heroId}`)).data

}

export const SingleSuperheroQuery = ( heroId )=>{
    // the single superheroquery will take heroid as parameter as , it should be integrated in the link just as params in other function that i used 

    return useQuery( ['hero-id',heroId] , () => functionSingle(heroId) )

}