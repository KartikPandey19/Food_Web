
import {CDN_URL} from '../utils/constants.js';

const RestaurantCard = (props) =>{
  const {resData} = props;
  const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info;
  const displayedCuisines = cuisines.length > 5 
  ? cuisines.slice(0, 5).join(', ') + ', ...' 
  : cuisines.join(', ');

  const {deliveryTime} = resData?.info.sla;
  return <div className="grid my-4 mx-4" >
      
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow h-96 w-64  ">
    <a href="#">
        <img className="rounded-t-lg w-full h-44 " src={CDN_URL+cloudinaryImageId} alt="Food" />
    </a>
    <div className="p-5">
        <h3 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{name}</h3>
        <h3 className="mb-2 text-base tracking-tight text-gray-900 ">{displayedCuisines}</h3>
        <div className='flex justify-between'>
        <h3 className="mb-2 text-base tracking-tight text-gray-900 ">{avgRating} stars</h3>
        <h3 className="mb-2 text-base tracking-tight text-gray-900 ">{costForTwo}</h3>
        </div>
        <h3 className="mb-2 text-base tracking-tight text-gray-900 ">Just {deliveryTime} Minutes Away</h3>
        
    </div>
</div>

    </div>
  
}

export default RestaurantCard;