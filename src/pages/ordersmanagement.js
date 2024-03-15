import React, { useState } from 'react';

const OrdersManagement = () => {
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'Amith', orderDate: '2024-01-01', status: 'Pending' },
    { id: 2, customerName: 'Smitha', orderDate: '2024-02-25', status: 'Shipped' },
    { id: 3, customerName: 'Sona', orderDate: '2024-03-10', status: 'Delivered' }
  ]);

  const handleUpdateStatus = (id, newStatus) => {
    const updatedOrders = orders.map(order => 
      order.id === id ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  }

  const handleDeleteOrder = (id) => {
    const filteredOrders = orders.filter(order => order.id !== id);
    setOrders(filteredOrders);
  }

  return (
    <div style={{ backgroundColor: '#FFE4C4'	, padding: '10px' }}>
      <h2 >Orders Management </h2>
     
      
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ backgroundColor:'grey' , border: '1px solid black', padding: '10px' }}>Order ID</th>
            <th style={{  backgroundColor:'grey' ,border: '1px solid black', padding: '10px' }}>Customer Name</th>
            <th style={{  backgroundColor:'grey' ,border: '1px solid black', padding: '10px' }}>Order Date</th>
            <th style={{  backgroundColor:'grey' ,border: '1px solid black', padding: '10px' }}>Status</th>
            <th style={{ backgroundColor:'grey' , border: '1px solid black', padding: '10px' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td style={{ border: '1px solid black', padding: '10px' }}>{order.id}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{order.customerName}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{order.orderDate}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{order.status}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>
                <button  style={{ marginRight: '10px' }}onClick={() => handleUpdateStatus(order.id, 'Shipped')}>Ship</button>
                
                <button style={{ marginRight: '10px' }} onClick={() => handleUpdateStatus(order.id, 'Delivered')}>Deliver</button>
                <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OrdersManagement;