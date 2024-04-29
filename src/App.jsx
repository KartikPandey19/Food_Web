import './App.css'
import Header from './Components/Header.jsx';
import Body from './Components/Body.jsx';
import About from './Components/About.jsx';
import Contact from './Components/Contact.jsx';
import Error from './Components/Error.jsx';
import RestaurantMenu from './Components/RestaurantMenu.jsx';
import { createBrowserRouter, Outlet} from 'react-router-dom';

function App() {
  
  return(
      <div className='app'>
      <Header />
      <Outlet />
      </div>
    
  )
}

 export const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <Body />
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:"/contact",
        element:<Contact />
      },
      {
        path:"/restaurants/:resId",
        element:<RestaurantMenu />
      }
    ],
    errorElement: <Error />
  },
  
])

export default App;
