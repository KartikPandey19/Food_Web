import '../App.css';
import {CDN_URL} from '../utils/constants.js';

const RestaurantCard = (props) =>{
  const {resData} = props;
  const {cloudinaryImageId,name,cuisines,avgRating,costForTwo} = resData?.info;
  const {deliveryTime} = resData?.info.sla;
  return(
    <div className='res-card'>
      <div className='res-img'>
        <img src={CDN_URL+cloudinaryImageId}/>
      </div>
      <div className='res-details'>
        <h3>{name}</h3>
        <h3>{cuisines.join(', ')}</h3>
        <h3>{avgRating} stars</h3>
        <h3>{costForTwo}</h3>
        <h3>{deliveryTime} minutes</h3>
      </div>
    </div>
  )
}

export default RestaurantCard;