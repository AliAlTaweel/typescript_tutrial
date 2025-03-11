import './App.css'
import Button from './components/Button'
import Input from './components/Input' 
import Container from './components/Container'
import Products from './components/Products'  

function App() {
  const productData = [
    {
        id: 1,
        name: 'Product 1',
        desc: 'Description for product 1',
        price: 29.99
    },
    {
        id: 2,
        name: 'Product 2',
        desc: 'Description for product 2',
        price: 39.99
    },
    {
        id: 3,
        name: 'Product 3',
        desc: 'Description for product 3',
        price: 49.99
    }
]
 
  return (
    
  <div className="App">
    <Button handleClick={(e,id) => 
    console.log(e.target,id)}/>
    <Input value="H" handleChange={(event) => console.log(event.target.value)}/>
<Container style={{border:"1px solid yellow", padding:"1rem"}}/>
<Products arrProducts={productData}/>


  </div>
  )
}

export default App
