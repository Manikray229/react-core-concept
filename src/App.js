import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks = ['Razzak', 'Jasim', 'Alomgir', 'Manik', 'Ray']
  const products = [
    { name: 'Photoshop', price: '$999.99' },
    { name: 'PDF Reader', price: '99.99' },
    { name: 'Photoshop', price: '$999.99' },
    { name: 'PDF Reader', price: '99.99' },
    { name: 'adobe', price: '666.99' }

  ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            nayoks.map(nayoks => <li>{nayoks}</li>)
          }
        </ul>
        {
          products.map(pd => <Product product={pd}></Product>)
        }
      </header>
    </div>
  );
}

function Users() {
  const [user, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h3>Dynamic Users {user.length}</h3>
      {
        user.map(user => <li>{user.name}</li>)
      }
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncreas = () => setCount(count + 1);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count - 1)}>decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

function Product(props) {
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '400px',
    width: '400px',
    margin: '20px',
    float: 'left',
  }
  console.log(props)
  return (
    <div style={productStyle}>
      <h2>{props.product.name}</h2>
      <h4>{props.product.price}</h4>
      <button>Buy now</button>
    </div>
  )
}


export default App;
