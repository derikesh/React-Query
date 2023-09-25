import axios from "axios";
import { useQuery } from "react-query";


const getuser = async (email) =>{
      
    try {
        return await axios.get( `http://localhost:4000/users/${ email }` );
    } catch (err){
        throw new Error(err.message);
    }

}


const channelfunction = async (channelID) =>{
      
    try {
        return await axios.get( `http://localhost:4000/channel/${ channelID }` );
    } catch (err){
        throw new Error(err.message);
    }

}


function DependentQuery( {email} ) {


    const { data:user } = useQuery( ['user-id', email] , ()=> getuser( email ));
    const channelID = user?.data.channelID;

     const { data:channelIDd } = useQuery( [ 'channel-courses', channelID ],()=> channelfunction(channelID) , {
        enabled:!!channelID
    })

    console.log( channelIDd );
    
    return (
         <>
    </> );
 }
 
 export default DependentQuery;