import React, {useState} from 'react';
import Header from './Pages/Header';
import Slider2 from './Pages/Slider2';
import Task1 from './Pages/Task1';
import Task2 from './Pages/Task2';
import Task3 from './Pages/Task3';
import Task4 from './Pages/Task4';
import Footer from './Pages/Footer';

const App = () => {

    const [counter, setCounter] = useState(0);
    const [total, setTotal] = useState(0)

    const handleAdd = (price) => {
        setTotal(total + price)
        setCounter(counter + 1)
      }

      
    const resetCart = () => {
        setTotal(0)
        setCounter(0)
    }
    
    return (
        <>
           
            <Header counter={counter}  total={total} resetCart={resetCart}/>
            
                <Slider2 />
                
                <Task1  counter={counter} setCounter={setCounter} setTotal={setTotal} />
                
                <Task2 />
            
                <Task4 handleAdd={handleAdd} resetCart={resetCart} />
            

            <Footer />

        </>
    )
}

export default App;

