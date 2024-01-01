import React, { useState, useEffect, createContext, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

const ProductContext = createContext();

const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch('https://fakestoreapi.com/products?limit=5')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  const deleteProduct = (productId) => {
    // Perform the DELETE request using the Fetch API
    fetch(`https://fakestoreapi.com/products/${productId}`, {
      method: 'DELETE',
    })
      .then(() => {
        // Update the state by filtering out the deleted product
        setProducts((prevProducts) => prevProducts.filter(product => product.id !== productId));
      })
      .catch(error => console.error('Error deleting product:', error));
  };

  const updateProduct = (productId, updatedProduct) => {
    // Perform the PUT request using the Fetch API
    fetch(`https://fakestoreapi.com/products/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    })
      .then(() => {
        // Update the state by replacing the old product with the updated product
        setProducts((prevProducts) =>
          prevProducts.map(product =>
            product.id === productId ? { ...product, ...updatedProduct } : product
          )
        );
      })
      .catch(error => console.error('Error updating product:', error));
  };

  const addProduct = (newProduct) => {
    // Perform the POST request using the Fetch API
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    })
      .then(res => res.json())
      .then(addedProduct => {
        // Update the state by adding the new product
        setProducts((prevProducts) => [...prevProducts, addedProduct]);
      })
      .catch(error => console.error('Error adding product:', error));
  };

  const contextValue = {
    products,
    loading,
    error,
    deleteProduct,
    updateProduct,
    addProduct,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};

export const ProductList = () => {
  const {
    products,
    loading,
    error,
    deleteProduct,
    updateProduct,
    addProduct,
  } = useProductContext();

  const [updateProductId, setUpdateProductId] = useState('');
  const [updateProductDetails, setUpdateProductDetails] = useState({});
  const [newProduct, setNewProduct] = useState({
    title: '',
    price: '',
    category: '',
    description: '',
    image: '',
  });

  const handleUpdateProduct = () => {
    const idToUpdate = parseInt(updateProductId, 10);

    if (!isNaN(idToUpdate)) {
      updateProduct(idToUpdate, updateProductDetails);
      setUpdateProductId('');
      setUpdateProductDetails({});
    } else {
      alert('Please enter a valid product ID for updating.');
    }
  };

  const handleAddProduct = () => {
    addProduct(newProduct);
    // Clear the input fields after adding a new product
    setNewProduct({
      title: '',
      price: '',
      category: '',
      description: '',
      image: '',
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
        {products.map(product => (
          <div key={product.id} className="col mb-5">
            <Card>
              <Card.Img variant="top" src={product.image} alt={product.title} />
              <Card.Body>
                <Card.Title> <p></p>{product.title}</Card.Title>
                <Card.Text>
                  <p>Price:</p> ${product.price}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
              
              </Card.Footer>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
