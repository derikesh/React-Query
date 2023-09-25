import axios from "axios";
import { useQuery } from "react-query";


 const FunctionSuperhero = async ()=>{
    
    try {
        return (await axios.get('http://localhost:4000/superheroes/')).data;
    }catch(err){
        throw new Error(err);
    }

}

const FunctionFriends = async ()=>{
    
    try {
        return (await axios.get('http://localhost:4000/friends/')).data;
    }catch(err){
        throw new Error(err);
    }

}
  

   
function ParallelPage() { 

  


        const { data:superhero , isLoading} = useQuery('query-superhero',FunctionSuperhero)
        const {data : friends , isLoading:superheroLoading}  = useQuery('query-friends',FunctionFriends)

        if( isLoading || superheroLoading ){
            return <h2>Loading......</h2>
        }

        console.log() 


    return ( <>
    

        {friends?.map( (friend)=> ( <h1 key={friend.name}>{friend.name}</h1> ) ) }

    </> );
}

export default ParallelPage;