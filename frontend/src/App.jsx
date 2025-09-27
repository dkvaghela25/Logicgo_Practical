import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {

  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: ''
  })
  const [products, setProducts] = useState([{
    name: '',
    price: '',
    category: ''
  }]);
  const [catagories, setCategories] = useState([]);

  const addProduct = async (e) => {
    e.preventDefault();
    console.log('formData : ', formData)
    const res = await axios.post('http://localhost:5000/api/product', formData)
    console.log("Response: ", res);
    fetchProducts();
    setFormData({});
  }

  const fetchProducts = async () => {
    const res = await axios.get('http://localhost:5000/api/product')
    console.log("Response: ", res);
    setCategories(res.data.products.map((product) => product.category));
    setProducts(res.data.products)
  }

  const makeRequest = async (e) => {
    const { value } = e.target;
    console.log('dvfsfsdfdsfs', value)
    const request = value ? `http://localhost:5000/api/product?category=${value}` : 'http://localhost:5000/api/product'
    const res = await axios.get(request)
    console.log("Response: ", res);
    setProducts(res.data.products)
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <h1>Add Product</h1>
      <form className='add-product' action="">
        <div>
          <label htmlFor="">Name: </label>
          <input
            type="text"
            name="name"
            value={formData.name || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Price: </label>
          <input
            type="text"
            name="price"
            value={formData.price || ''}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="">Category: </label>
          <input
            type="text"
            name="category"
            value={formData.category || ''}
            onChange={handleChange}
          />
        </div>
        <button onClick={addProduct}>Add Product</button>
      </form>
      <h1>Product List</h1>
      <table className="products-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>
              <select onChange={makeRequest}>
                <option value="">Category</option>
                {console.log('catagories--------------', catagories)}
                {catagories.map((c, index) =>
                  <option key={index} value={c}>{c}</option>
                )}
              </select>
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td className="name">{product.name}</td>
              <td className="name">{product.price}</td>
              <td className="price">{product.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App
