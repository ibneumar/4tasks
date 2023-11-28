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
  let [imgNumber, setImageNumber] = useState(1);
  let [leftArrow, setLeftArrow] = useState(true)
  let[rightArrow, setRightArrow] = useState(false)
    

  const handleImage = (index) => {
    setCurrentImage(images[index])
    setImages([...images])
    setImageNumber(index + 1);
    index === 0 ? setLeftArrow(true) : setLeftArrow(false)
    index === images.length - 1 ? setRightArrow(true) : setRightArrow(false)
  }

  const nextImage = () => {
    let i = images.indexOf(currentImage) + 1;
    handleImage(i)
  }

  const previousImage = () => {
    let i = images.indexOf(currentImage) - 1;
    handleImage(i)
   
  }


  return (
        <>
            
                <div className="box">
                    <div className="currentImage">
                        <img src={currentImage} alt="img" />
                    </div>
                    <div className="imagesBox">
                        {images.map((img, index) => {
                            let border = img === currentImage ? "5px solid green" : "2px solid gray";
                            return (
                            <img style={{border}} onClick={() => handleImage(index)} src={img} key={index} alt="..." />
                        )})}
                    </div>
                    
                        <h3 style={{textAlign: 'center'}}>Showing {imgNumber} of {images.length} </h3>
                        <div className="arrows">
                            <button onClick={previousImage} disabled={leftArrow}>&#8678;</button>
                            <button onClick={nextImage}  disabled={rightArrow}>&#8680;</button>
                        </div>
                </div>
            
            
        </>
    )
}

export default Task3;