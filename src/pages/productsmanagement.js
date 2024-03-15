import React, { useState } from 'react';

const ProductsManagement = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', category: 'Category 1', price: 10.99, stock: 20 },
    { id: 2, name: 'Product 2', category: 'Category 2', price: 15.99, stock: 15 },
    { id: 3, name: 'Product 3', category: 'Category 1', price: 20.99, stock: 10 },
  ]);

  const [newProduct, setNewProduct] = useState({ name: '', category: '', price: 0, stock: 0 });
  const [editMode, setEditMode] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);

  const addProduct = () => {
    if (editMode) {
      setProducts(products.map(product => product.id === editingProductId ? newProduct : product));
      setEditMode(false);
      setEditingProductId(null);
    } else {
      setProducts([...products, { id: products.length + 1, ...newProduct }]);
    }
    setNewProduct({ name: '', category: '', price: 0, stock: 0 });
  };

  const editProduct = (id) => {
    const productToEdit = products.find(product => product.id === id);
    setNewProduct({ ...productToEdit });
    setEditMode(true);
    setEditingProductId(id);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
    setEditMode(false);
    setEditingProductId(null);
  };

  return (
    <div style={{ backgroundColor: '#FFE4C4', padding: '10px' }}>
      <h2>Products Management</h2>
      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ backgroundColor: 'grey', border: '1px solid black', padding: '10px' }}>Name</th>
            <th style={{ backgroundColor: 'grey', border: '1px solid black', padding: '10px' }}>Category</th>
            <th style={{ backgroundColor: 'grey', border: '1px solid black', padding: '10px' }}>Price</th>
            <th style={{ backgroundColor: 'grey', border: '1px solid black', padding: '10px' }}>Stock</th>
            <th style={{ backgroundColor: 'grey', border: '1px solid black', padding: '10px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td style={{ border: '1px solid black', padding: '10px' }}>{product.name}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{product.category}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{product.price}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>{product.stock}</td>
              <td style={{ border: '1px solid black', padding: '10px' }}>
                <button style={{marginRight: '10px'}}onClick={() => editProduct(product.id)}>Edit</button>
                <button onClick={() => deleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>{editMode ? 'Edit Product' : 'Add Product'}</h3>
      <input type="text" placeholder="Name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} />
      <input type="text" placeholder="Category" value={newProduct.category} onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })} />
      <input type="number" placeholder="Price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} />
      <input type="number" placeholder="Stock" value={newProduct.stock} onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })} />
      <button onClick={addProduct}>{editMode ? 'Save' : 'Add'}</button>
    </div>
  );
};

export default ProductsManagement;

