import '../App.css';
import { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';
import { SWIGGY_API_URL } from '../utils/constants';
import ShimmerUI from './shimmer';



const Body = ()=>{
    const [resList,setResList] = useState([]);
    const [filterResList,setFilterResList] = useState([]);
    const [searchText,setSearchText] = useState("");

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async ()=>{
        const data = await fetch(SWIGGY_API_URL);

        const json = await data.json();
        setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if(resList.length ===0){
        return <ShimmerUI />;
    }

    return(
    <div className='body'>
      <div className='filter'>
        <div className='search'>
        <input type='text' value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
        }}  />
        <button onClick={()=>{
            const searchList = resList.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
            setFilterResList(searchList)
        }}>Search</button>
        </div>

        <button onClick={()=>{
            const filterList = resList.filter((res)=>res.info.avgRating >=4.5);
            setFilterResList(filterList);
        }}>Top Rated Restaurant</button>
      </div>
      <div className='res-container'>
         {
          filterResList.map(restaurant =><RestaurantCard key={restaurant.info.id} resData = {restaurant}/>)
         }
         
      </div>
    </div>
    )
  }

  export default Body;