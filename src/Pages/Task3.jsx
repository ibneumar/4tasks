import React, {useState} from "react";

const Task3 = () => {
    let [images, setImages] = useState([
        "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-crunch-with-fries-and-drink-2023-05-31115706.png",
        "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-chicken-n-chips-2023-05-31115706.png",
        "https://www.kfcpakistan.com/images/43a98620-ffaa-11ed-b6b3-6970cc1cd666-zingerstack-Combo-2023-05-31115706.png",
        "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-family-Festivle-3-2023-05-31115706.png",
        "https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-CrispyDuoBox-2023-05-31115706.png"
  ]);

  let  [currentImage, setCurrentImage] = useState("https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-crunch-with-fries-and-drink-2023-05-31115706.png");
  let [imgNumber, setImageNumber] = useState(1)
    

  const handleImage = (index) => {
    setCurrentImage(images[index])
    setImageNumber(index + 1)
  }
  return (
        <>
            <div className="container">
            <div className="currentImage">
                <img src={currentImage} alt="img" />
            </div>
            <div className="imagesBox">
                {images.map((img, index) => (
                    <img onClick={(e) => handleImage(index)} src={img} key={index} alt={`img${index}`}/>
                ))}
            </div>
            
                <h1>Showing {imgNumber} of {images.length} </h1>
            </div>
            
        </>
    )
}

export default Task3;