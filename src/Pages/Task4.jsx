import React, {useState} from "react";

const Task4 = () => {

  let cards = [
    {
        title: 'Krunch Burger',
        desc: 'Krunch fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun',
        price: 270,
        image: 'https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-krunch_variant_0-2023-05-31115706.png'
    },
    {
        title: 'Hot Wings Bucket',
        desc: '10 Pcs of our Signature Hot & Crispy Wings',
        price: 610,
        image: 'https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-HotWings_variant_0-2023-05-31115706.png'
    },
    {
        title: 'Crispy Duo Box',
        desc: 'Turn up the fun with 5 pcs Hot & Crispy Chicken + 1 Large fries + 2 Regular drinks.',
        price: 1250,
        image: 'https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-CrispyDuoBox-2023-05-31115706.png'
    },
    {
        title: 'Family Festival 3',
        desc: 'An ultimate meal for the fam. It includes 4 Zinger burgers + 4 pieces Hot and Crispy Chicken + 2 Dinner rolls + 1.5 Liter drink',
        price: 2450,
        image: 'https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-family-Festivle-3-2023-05-31115706.png'
    },
    {
        title: 'Twister Combo',
        desc: 'Twister + 1 Regular fries + 1 Regular drink',
        price: 670,
        image: 'https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-twister-combo-2023-05-31115706.png'
    }
  ]


  let [total, setTotal] = useState(0)
  let [counter, setCounter] = useState(0)



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
            <div className="container my-5">
            <h1>Task 4</h1>
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">
                        <h3>Cart : {counter} Items | Rs. {total}</h3>
                        <button onClick={resetCart} style={{margin: '10px'}} className="btn btn-primary" >Reset Cart</button>
                    </span>
                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {cards.map((card, index ) => (
                    <div className="col" key={index}>
                    <div className="card">
                        <img src={card.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">{card.title}</h5>
                        <p className="card-text">{card.desc}</p>
                        <p>Rs: {card.price}</p>
                        <button className="btn btn-primary" onClick={() => handleAdd(card.price)}>Add to Cart</button>
                        </div>
                    </div>
                </div>
                ))}
                </div>
            </div>
        </>
    )
}

export default Task4;