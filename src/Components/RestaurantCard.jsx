import '../App.css';
import {CDN_URL} from '../utils/constants.js';

const RestaurantCard = (props) =>{
  const {resData} = props;
  const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info;
  const {deliveryTime} = resData?.info.sla;
  return <div >
      
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
    <a href="#">
        <img className="rounded-t-lg" src={CDN_URL+cloudinaryImageId} alt="" />
    </a>
    <div className="p-5">
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{name}</h3>
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{cuisines.join(', ')}</h3>
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{avgRating} stars</h3>
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{costForTwo}</h3>
        <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{deliveryTime} minutes</h3>
        
    </div>
</div>

    </div>
  
}

export default RestaurantCard;