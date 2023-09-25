import { NavLink, Link, Outlet } from "react-router-dom";

function Navitem() {
  return (
    <>
      <div className=" text-slate-100  bg-slate-700  ">
        <div className="container max-w-7xl m-auto flex justify-between bg-slate-700 py-4">

          <div className="logo text-2xl font-bold">Query</div>
          <div className="nav_items flex gap-12 text-xl">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/resuperhero"}>RQsuoerhero</NavLink>
            <NavLink to={"/superhero"}>SuperHero</NavLink>
          </div>
        </div>
      </div>

      <div className="allitems max-w-7xl m-auto py-8">
        <Outlet />
      </div>
    </>
  );
}

export default Navitem;
