import React from 'react';
import './App.css';
import { createBrowserRouter , createRoutesFromElements ,Route,RouterProvider} from 'react-router-dom';
import HomePage from './Component/HomePge'
import RQsuoerhero from './Component/RQsuperhero'
import SuperHero from './Component/SuperHero'
import Navitem from './Component/Layout/Navitems'
import { ReactQueryDevtools } from 'react-query/devtools'
import SuperHeroPage from './SuperHero.page';
import { PassIdSuperhero } from './SuperHero.page';
import ParallelPage from './Component/Layout/ParallelPage';
import {DynamicQuery} from './ParallelQueries/DynamicQuery';
import DependentQuery from './Component/DependentQurery';
import PaginatedQuery from './Component/Paginated-query';
import InfiniteQuery from './Component/InfiniteQuery';

// making a query envaroment just like routing 
import { QueryClientProvider, QueryClient  } from 'react-query';

function App() {


const queryClient = new QueryClient();

  // creating a react router with creatbrowerrouter

  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navitem />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/resuperhero" element={<RQsuoerhero />} />
        <Route path="/superhero" element={<SuperHero />} />
        {/* Move the :id route out of the /superhero route */}
        <Route path="/resuperhero/:id"  element={<SuperHeroPage />} />


      {/* Dynamic Query */}
      {/* <Route path='/dynamic/'>
        <DynamicParallelPage heroIds = {[1,2]}/>
      </Route> */}

      <Route path='/parallel' element={ <ParallelPage/>}/>

      <Route path='/infinite' element={ <InfiniteQuery/>}/>


      <Route path='/dynamic-parallel-page' element = {  <DynamicQuery prop1= { [1,3] } /> } />


      <Route path='/dependent-page' element = {  <DependentQuery email= { 'rikeshsherpa1@gmail.com' } /> } />

      <Route path='/pagination' element = {  <PaginatedQuery/> } />



    </Route>
    )
  );

 
  return (
   <>

     <QueryClientProvider client={queryClient}>
     <div className="navbar">
        { <RouterProvider router = {route} /> }
      </div>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
     </QueryClientProvider>

   </>
  );
}

export default App;
