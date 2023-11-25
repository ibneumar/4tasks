import React, {useState} from "react";

const Task4 = () => {
    let [images, setImages] = useState([
        "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-crunch-with-fries-and-drink-2023-05-31115706.png",
        "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-chicken-n-chips-2023-05-31115706.png",
        "https://www.kfcpakistan.com/images/43a98620-ffaa-11ed-b6b3-6970cc1cd666-zingerstack-Combo-2023-05-31115706.png",
        "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-family-Festivle-3-2023-05-31115706.png",
        "https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-CrispyDuoBox-2023-05-31115706.png"
  ]);
    return (
        <>
            <div className="container my-5">
            <h1>Task 4</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                {images.map((img, index ) => (
                    <div className="col" key={index}>
                    <div className="card">
                        <img src={images[index]} className="card-img-top" alt="..." />
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
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