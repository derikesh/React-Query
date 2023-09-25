import axios from "axios";
import { useQuery } from "react-query";

function ParallelQueries() {
    const FunctionSuperHero = async () => {
        const response = await axios.get('http://localhost:4000/superheroes/');
        return response.data;
    }

    const FunctionFriends = async () => {
        const response = await axios.get('http://localhost:4000/friends/');
        return response.data;
    }

    const { data: superheroo, isLoading: SuperheroLoading, isError: superheroError, error: superHeroerror } = useQuery('parall-super-hero', FunctionSuperHero);

    const { data: friends, isLoading, isError, error } = useQuery('parall-friends', FunctionFriends);

    return (
        <>
            {superheroo?.map(single => {
                console.log(single.name); // Access 'name' property of each superhero
            })}
        </>
    );
}

export default ParallelQueries;
