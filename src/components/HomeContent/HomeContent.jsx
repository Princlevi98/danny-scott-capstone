import "./HomeContent.scss";
import { useState, useEffect } from "react";
import imageOne from "../../assets/images/charity-image.jpeg";
import imageTwo from "../../assets/images/bundles.jpeg";
import imageThree from "../../assets/images/group.jpeg";
import imageFour from "../../assets/images/soup-kitchen.jpeg";

const images = [imageOne, imageTwo, imageThree, imageFour];

const Content = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="content">
      <section className="content__container">
        <div className="content__image-container">
          {images.map((image, index) => (
            <img
              className="content__image"
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              style={{
                display: index === currentImageIndex ? "block" : "none",
              }}
            />
          ))}
        </div>
        <article className="content__text-container">
          <p className="content__text">
            asdbckj asdbckj asdbckj
            asdbckjsfdfsdsxsewdhdjcbkjdabcdsjhsdjhjkuibiub asdbckj v
          </p>
        </article>
      </section>
    </section>
  );
};

export default Content;
