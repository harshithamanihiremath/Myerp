import React from 'react';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Dashboard from "./pages/dashboard";
import OrdersManagement from './pages/ordersmanagement';
import ProductsManagement from './pages/productsmanagement';
import NavBar from './component/NavBar';
import OrdersCalendarView from './pages/orderscalendar';
import './App.css'
function App()  {
  return(
 
    <div>
     <NavBar/>
       <Routes>
        <Route path='/' element={<Dashboard/>} />
        <Route path='/products' element={<ProductsManagement/>} />
        <Route path='/orders' element={<OrdersManagement/>} />
        <Route path='/calenderview' element={<OrdersCalendarView/>}/>
      //</Routes>
    </div>
  
);
}
export default App;


