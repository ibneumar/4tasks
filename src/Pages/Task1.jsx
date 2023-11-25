import React, {useState} from "react";

const Task1 = () => {
    const [counter, setCounter] = useState(0);
    const [total, setTotal] = useState(0)

        let product = {
            id: 101,
             title: "Krunch Combo",
             desc: "1 Krunch burger + 1 Regular fries + 1 Regular drink",
             image:"https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-crunch-with-fries-and-drink-2023-05-31115706.png",
             price: 520,
        }

        const handleAdd = () => {
            setCounter(counter + 1);
            setTotal((counter + 1) * product.price);
        }

        const handleReset = () => {
            setCounter(0);
            setTotal(0);
        }


    return (
        <>
        <div className="container my-5">
        <h1>Task 1</h1>
                <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">
           Cart : {counter} Items | Rs. {total}) </span>
        </div>
       </nav>

      <div className="card" style={{ width: "18rem" }}>
        <img src={product.image} className="card-img-top" alt={product.title} />
         <div className="card-body">
           <h5 className="card-title"> {product.title} </h5>
          <p className="card-text">{product.desc}</p>
          <h5>Rs. {product.price}</h5>
           <button className="btn btn-primary" onClick={handleAdd}>Add to Cart</button>
           <button style={{marginLeft: '10px'}} className="btn btn-primary" onClick={handleReset}>Reset Cart</button>
        </div>
      </div>
    </div>
        </>
    )
}

export default Task1;