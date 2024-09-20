import axios from "axios";
import {useState, useEffect} from "react";
import { SWIGGY_API_URL } from '../utils/constants';

export const useFilterList =  () =>{
    const [filterResList, setFilterResList] =useState([]);

    useEffect(()=>{
        axios.get(SWIGGY_API_URL)
        .then(response =>{

          const res = response.data.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          setFilterResList(res);

          //setFilterResList(res.filter((res)=>res.info.avgRating >=4.5));
          //console.log(filterResList);

        })
       
    }, []);
    return {
        filterResList
    }

   
}