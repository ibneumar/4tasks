import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Slider2 = () => {
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
    return (
        <Carousel data-bs-theme="dark">
            {cards.map((card, index) => (
                    <Carousel.Item key={index}>
                        <img style={{margin: '0 auto', top: '-80px', position: 'relative'}}
                        className="d-block w-80"
                        src={card.image}
                        alt="..."
                        />
                        <Carousel.Caption>
                        <h5>{card.title}</h5>
                        <p>{card.desc}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default Slider2;