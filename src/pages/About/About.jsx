import "./About.scss";
import image from "../../assets/images/Charity-scaled.jpeg";

const About = () => {
  return (
    <section className="about">
      <div className="about__container">
        <article className="about__organisation-info">
          <p className="about__text">
            Here at Every step of the way it is our goal to help single parent
            families as much as we can during seasonal periods. This is help
            with clothes, food, toiletries and access to children’s activities .
            Our team has help consisting of; Furniture findings, food, drink,
            social worker support, life coach support, holistic support, toys,
            clothes and directions to the correct services that may be needed.
            We also have a client base, which involved 1:1 support . A key
            worker is allocated when registered.
          </p>
        </article>
        <article className="about__team-container">
          <img src={image} alt="" className="about__image" />
        </article>
      </div>
    </section>
  );
};

export default About;
