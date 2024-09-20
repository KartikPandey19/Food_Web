import '../App.css';
import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import { SWIGGY_API_URL } from '../utils/constants';
import ShimmerUI from './Shimmer';
import { Link } from 'react-router-dom';
import { useFilterList } from '../hooks/customHooks';


const Body = ()=>{
    const [searchText,setSearchText] = useState("");
    const {filterResList}  = useFilterList();
    const [resList,setResList] = useState(filterResList);



    useEffect(()=>{
        fetchData(); 
    }, []);

    const fetchData = async ()=>{
        const data = await fetch(SWIGGY_API_URL);

        const json = await data.json();
        setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        //setFilterResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(resList.length ===0){
        return <ShimmerUI />;
    }

    return(
    <div className='body'>
      <div className='flex py-2'>
        <div className='flex justify-center items-center mx-2 '>

        <form className="max-w-md mx-auto">   
            <label  className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
            <div className="relative ">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
                    <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    </svg>
                </div>
                <input type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 " placeholder="Search...." value={searchText} required onChange={(e)=>{
                    setSearchText(e.target.value);
                }} />
                <div className='flex'>
                <button type="button" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 " onClick={()=>{
                   setResList(filterResList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())));
                }}>Search</button>
                <button type="button" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 " onClick={()=>{
                   setResList(filterResList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())));
                }}>Search</button>
                </div>
                
            </div>
            
            
        </form>
        </div>
        <div className='flex justify-center items-center mx-2 ' >
            <div className='max-w-md mx-auto'>
        <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>{
           setResList(filterResList.filter((res)=>res.info.avgRating >=4.5));
        }}>Top Rated Restaurants</button>
        <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={()=>{
           setResList(filterResList);
           setSearchText("")
        }}>Remove Filter</button>
        </div>
        </div>
        
        
       
      </div>
      <div className=' flex flex-wrap justify-center '>
         {
          resList.map(restaurant =><Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard  resData = {restaurant}/></Link>)
         }
         
      </div>
    </div>
    )
  }

  export default Body;