import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Shop from './components/Shop'
import './App.css'
import Cart from './components/Cart';

function App() {
  const [cart,setCart] = useState([]);
  const [warning,setWarning] = useState(false);
  const [show,setShow] = useState(true);

  function handleClick(item){
    let isPresent = false;
    cart.forEach((product)=>{
      if(item.id === product.id)
        isPresent = true 
    })
    if(isPresent){
      // console.log('item already present');
      setWarning(true);
      setTimeout(()=>{
        setWarning(false)
      },2000);
      return
      
    }
    setCart([...cart,item])
    
  }

  return (
    <div>
      <Navbar size={cart.length} setShow={setShow}/>
      {
        show ?<Shop handleClick={handleClick}/> :<Cart cart={cart} setCart={setCart}/>
      }
      <Shop handleClick={handleClick}/>
      {
        warning && <div className='warning'>
          Item is already present in your cart
        </div>
      }
    </div>
  )
}

export default App
