import { useState,useEffect } from "react"
import { SWIGGY_RES_API_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
import ShimmerUI from "./Shimmer";
const RestaurantMenu = () =>{
    const [resData,setResData] = useState(null);
    
    const {resId}= useParams();
    
    
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData =async ()=>{
        const data = await fetch(SWIGGY_RES_API_URL+resId);
        const json = await data.json();
        setResData(json.data);
        
    };
    

    if(resData ==null)return <ShimmerUI />;
 
   const {name,cuisines,costForTwoMessage} = resData?.cards[2]?.card?.card?.info;
   const {itemCards} = resData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card;
    return (
        <div className="mt-96">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <p>{costForTwoMessage}</p>
            <h2>Menu</h2>
            <p>{itemCards[0].card.info.category}</p>
            <ul>
                {itemCards.map(item =><li key={item.card.info.id}>{item.card.info.name} - ₹{item.card.info.price/100}</li>)}
                
            </ul>
        </div>
    )
}

export default RestaurantMenu