import { Link } from "react-router-dom";
import { useState } from "react";
import { SuperHerosLinkQuery  } from "../Hooks/SuperHeroLinks";
import { Addsuperhero } from "../Hooks/SuperHeroLinks";

function RQsuperhero() {

    const [name, setName] = useState('');
    const [alterEgo, setAlterEgo] = useState('')
    const { mutate } = Addsuperhero();


  const { data : apidata, isError, isLoading, error, refetch  } = SuperHerosLinkQuery();


  if (isLoading) {
    return <h1>Loading data...</h1>;
  }

  if (isError) {
    return <h1>Error: {error.message}</h1>;
  }
  const checkempty = ()=> {
    if( name && setName !== ''){
      alert('no input ')
    }
  }


  const fetchChanges = ()=> {
    const sendHero = { name , alterEgo };
    mutate(sendHero);
  }

  


  return (
    <>
      <h1 className="text-2xl font-bold">Super Heroes</h1>
     

    <div className="flex gap-6 from_wrap my-4">
      <form action="">
      <input 
      className="bg-slate-300"
      type="text"
      
      name="heroname"
      onChange={(e)=>setName(e.target.value) }
      />

    <input 
      className="bg-slate-300"
      type="text"
      
      name="alterego"
      onChange={(e)=>setAlterEgo(e.target.value) }

      />

      <button  onClick={  fetchChanges  } type='submit' className="bg-lime-400 cursor-pointer active:bg-lime-600 px-4 rounded-lg btn_wrap">
        Send
      </button>

      </form>

    </div>



   

    {apidata && apidata.map( (heroname) => (
    <Link to={`/resuperhero/${heroname.id}`} key={heroname.id} ><h1 >{heroname.name}</h1> </Link>
    )
      ) }

    </>
  );
}

export default RQsuperhero;


