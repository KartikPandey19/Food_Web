import './App.css'

function App() {
  
  return(
      <div className='app'>
      <Header />
      <Body />
      </div>
    
  )
}

const Header = ()=>{
  return(
    <div className='header'>
      <div className='logo-container'>
        <img className="logo" src="https://shorturl.at/dgEPZ" />
      </div>
      <div className='nav-items'>
        <ul>
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
          <li>CART</li>
        </ul>
      </div>

    </div>
  )
}

const RestaurantCard = (props) =>{
  console.log(props);
  return(
    <div className='res-card'>
      <div className='res-img'>
        <img src="https://shorturl.at/dCEYZ"/>
      </div>
      <div className='res-details'>
        <h3>{props.name}</h3>
        <h3>{props.cuisine}</h3>
        <h3>{props.Rating}</h3>
        <h3>{props.Time}</h3>
      </div>
    </div>
  )
}
const Body = ()=>{

  return(
  <div className='body'>
    <div className='search-bar'>
      <input type="text" value="Search" />
    </div>
    <div className='res-container'>
       <RestaurantCard 
       name="Kartik foods"
       cuisine="Burger, pizza, Drinks, Pasta"
       Rating="4.4 stars"
       Time="38 minutes"
       />
    </div>
  </div>
  )
}

export default App
