import React from "react";
import Button from "../../components/Button/Button";
import "./HomePage.scss";

const HomePage: React.FC = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home__top">
          <h2 className="home__title">Article list</h2>
          <div className="home__buttons">
            <span className="home__btn">
              <Button text="Make big cards" size="16px" />
            </span>
            <span className="home__btn">
              <Button text="Add articles" size="16px" />
            </span>
          </div>
        </div>
        <div className="home__content">content</div>
        <span className="home__btn home__btn--center">
          <Button text="Show more" size="18px" />
        </span>
      </div>
    </div>
  );
};

export default HomePage;
