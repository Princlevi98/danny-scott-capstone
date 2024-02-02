import "./HomeContent.scss";
import image from "../../assets/images/charity-image.jpeg";

const Content = () => {
  return (
    <section className="content">
      <section className="content__container">
        <div className="content__image-container">
          <img
            className="content__image"
            src={image}
            alt="latest charity event"
          />
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
