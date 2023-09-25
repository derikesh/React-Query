import axios from "axios";
import { useQuery } from "react-query";
import { useMutation } from "react-query";

export const SuperHerosLinkQuery = () => {
  return useQuery(
    "new-queryy",
    async () => {
      try {
        const response = await axios.get("http://localhost:4000/superheroes/");
        return response.data;
      } catch (err) {
        return { error: err };
      }
    }
  );
}



// custome hook for mutation 


const addinghero = ( hero )=> {

  return axios.post( 'http://localhost:4000/superheroes', hero );
  
}

export const Addsuperhero = ()=> {
  
  // usemutation function will only have single parameter , i.e function to do anything with  the data 
  return useMutation( addinghero )

}


