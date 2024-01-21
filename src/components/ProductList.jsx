import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./Styles.css";



const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
  
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`https://fakestoreapi.com/products?limit=10&page=${page}`);
        setProducts((prevProducts) => [...prevProducts, ...response.data]);
        setPage((prevPage) => prevPage + 1);
      } catch (error) {
        console.error('Error fetching product data:', error.message);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchProducts();
    }, []); // Initial fetch on component mount
  
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        fetchProducts();
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [page]); // Attach event listener with dependency on the 'page' variable
  
    return (
      <div className="product-list-container">
        <h2>Product List</h2>
        {products.length > 0 ? (
          <ul className="product-list">
            {products.map((product) => (
              <li key={product.id} className="product-item">
                <img src={product.image} alt={product.title} className="product-image" />
                <div className="product-details">
                  <p className="product-title">{product.title}</p>
                  <p className="product-price">${product.price}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>No products found.</p>
        )}
        {loading && <p>Loading...</p>}
      </div>
    );
  };
  
  export default ProductList;