import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import Cart from "./components/Cart";
function App() {

  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [show, setShow] = useState(true);

  const handleClick = (item) => {

    //Agar cart me item present nahi hai tab
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    })

    //Agar cart me same product ko add kare to show some warning
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      // console.log("Pahle se hai ");
      return;
    }
    setCart([...cart, item])
  }

  // d means data
  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id)
        ind = index;
    })
    const tempArr = cart;
    tempArr[ind].amount += d;
    // console.log(tempArr);


    if (tempArr[ind].amount === 0) {
      tempArr[ind].amount = 1;
    }

    setCart([...tempArr]);
  }
  return (
    <div>
      {/*      cart ko size bhej rahe hai   */}
      <Navbar size={cart.length} setShow={setShow} />
     

      {/* Now jab koi card per click kare jo pura list cart me chala jaye and for this we can also usecontext */}
      {/* below code show that show is there then show shop compo (jaha se buy karna hai) other show cart (jaha se order place hoga) */}
      {
        show ?
        <Shop handleClick={handleClick} /> 
         
         : <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      }
      {
        warning && <div className='warning'> Item is Already Exist </div>
      }
    </div>
  );
}

export default App;
