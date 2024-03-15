import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [productCount, setProductCount] = useState(0);
  const [orderCount, setOrderCount] = useState(0);

  
  useEffect(() => {
    setProductCount(10);
    setOrderCount( 5);
  }, []);

  return (
    <div style={{ backgroundColor: '#FFE4C4', padding: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '50vh' }}>
      <h2>Dashboard</h2>
      <h1> Welcome to our ERP System</h1>
      <h2>Key Features</h2>
      <div>
        <p>Total Number of Products: {productCount}</p>
        
        <p>Total Number of Orders  : {orderCount}</p>
      </div>
      <br/>
      <br/>
      <div>
      <Link to='/products'>
        <button style={{ backgroundColor: 'brown', color: 'white', padding: '10px 20px',marginRight: '80px' }} 
        onClick={() => { console.log('Navigate to Products Management') }}>Products Management</button>
        </Link>
        <Link to='/orders'>
        <button style={{backgroundColor: 'brown', color: 'white', padding: '10px 20px', marginRight: '80px' }} 
        onClick={() => { console.log('Navigate to Orders Management') }}>Orders Management</button>
        </Link>
        <Link to='/calenderview'>
        <button style={{backgroundColor: 'brown', color: 'white', padding: '10px 20px', marginRight: '10px' }} 
        onClick={() => { console.log('Navigate to Orders Management') }}>Orders CalendarView</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;



