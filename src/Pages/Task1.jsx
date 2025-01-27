import React from "react";

const Task1 = ({handleAdd}) => {
  

        let product = {
            id: 101,
             title: "Krunch Combo",
             desc: "1 Krunch burger + 1 Regular fries + 1 Regular drink",
             image:"https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-crunch-with-fries-and-drink-2023-05-31115706.png",
             price: 520,
        }

    return (
        <>
        <div className="section">
        <div className="container">
          <div className="card" style={{ width: "18rem"}}>
            <img src={product.image} className="card-img-top" alt={product.title} />
            <div className="card-body">
              <h5 className="card-title"> {product.title} </h5>
              <p className="card-text">{product.desc}</p>
              <h5>Rs. {product.price}</h5>
              <button className="btn btn-primary" onClick={() => handleAdd(product.price)}>Add to Cart</button>
            </div>
          </div>
        </div>
        </div>
        </>
    )
}

export default Task1;