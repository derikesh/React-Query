import axios from "axios";
import { Fragment } from "react";
import { useInfiniteQuery } from "react-query";

function InfiniteQuery() {

    // we will be passing a page parameter to this function which will be read by the object paramter of infinite query 
    const fetchdata = async ( {pageParam=1} )=> {
        try {
            const link = (await axios.get(`http://localhost:4000/colors?_limit=2&_page=${pageParam}`)).data;
            return link;
        }catch(err){
            throw new Error(err.message);
        }
    }

    const {data ,
         isLoading ,
          fetchNextPage,
          isFetching,
          hasNextPage,
          isFetchingNextPage
        } = useInfiniteQuery( 'infinite-query' , fetchdata , {
            getNextPageParam : (_lastpage , pages) => {
                if( pages.length < 4 ){
                    return pages.length+1;
                }else {
                    return undefined;
                }
            }
        } );

    if(isLoading){
        return <h2>Loading.......</h2>
    }

    return (
         <>

        { data?.pages.map( (group,i)=>{
            return (
                <Fragment key={i}>
                    {group.map( (item) => (
                        <h2>{item.id} {item.label}</h2>
                    ) )}
                </Fragment>
            )
        } ) }

        <button disabled={!hasNextPage} onClick={fetchNextPage} className="bg-slate-300 px-2 mt-4 rounded-lg">Loadmore</button>

        { isFetching && !isFetchingNextPage ? 'loading' : '' }
   </>
    );
}

export default InfiniteQuery;