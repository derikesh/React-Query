import axios from "axios";
import { useState, useEffect } from "react";

function SuperHero() {


// the fetching the classic and old 

  const [Heros, setHeros] = useState([]);
  const [Error, setError] = useState('');

  useEffect(() => {
    const DisplayFunction = async () => {
      try {
        const link = (await axios.get("http://localhost:4000/superheroes/"))
          .data;

        setHeros(link);
      } catch (err) {
        setError(err.message);
      }

    };

    DisplayFunction();
  }, []);

  if( Error ) {
    return <h2>{Error}</h2>
  }

  return (
    <>

    <h1 className="text-2xl font-bold">Super Heros</h1>

      {Heros ? (
        Heros.map((singleHero,i) => <h2 key={i}>{singleHero.name}</h2>)
      ) : (
        <>
          <h2 >Loading data</h2>
        </>
      )}
    </>
  );
}

export default SuperHero;

