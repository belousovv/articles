import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ArticleItems from "../../components/ArticleItems/ArticleItems";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import NewArticle from "../../components/NewArticle/NewArticle";
import { actions } from "../../redux/homePage-reducer";
import { selectPosts, selectPostsPerRow } from "../../redux/homePage-selectors";
import "./HomePage.scss";

const HomePage: React.FC = () => {
  console.log("HomePage");

  const posts = useSelector(selectPosts);
  const postsPerRow = useSelector(selectPostsPerRow);

  const dispatch = useDispatch();

  const scrollTarget = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState<number>(postsPerRow);
  const [showMoreActive, setShowMoreActive] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  // Modal States
  const [isActive, setIsActive] = useState(false);

  const showMoreHandler = () => {
    setIsClicked(true);
    let next = visible + postsPerRow;
    if (posts && next > posts.length) {
      next = posts.length;
      setVisible(next);
      setShowMoreActive(false);
    } else {
      setVisible(next);
    }
  };

  const postsPerRowHandler = () => {
    dispatch(actions.postsPerRowChanged());
  };

  useEffect(() => {
    if (isClicked) {
      scrollTarget.current?.scrollIntoView({ behavior: "smooth" });
      setIsClicked(false);
    }
  }, [visible]);

  useEffect(() => {
    setVisible(postsPerRow);
    setShowMoreActive(true);
  }, [postsPerRow]);

  return (
    <div className="home">
      <div className="container">
        <div className="home__top">
          <h2 className="home__title">Article list</h2>
          <div className="home__buttons">
            <span className="home__btn" onClick={postsPerRowHandler}>
              <Button
                text={postsPerRow === 3 ? "Make big cards" : "Make small cards"}
                size="16px"
              />
            </span>
            <span
              className="home__btn"
              onClick={() => {
                setIsActive((prev) => !prev);
              }}
            >
              <Button text="Add articles" size="16px" />
            </span>
          </div>
        </div>
        <ArticleItems
          visible={visible}
          posts={posts}
          postsPerRow={postsPerRow}
        />
        {showMoreActive && (
          <span
            className="home__btn home__btn--center"
            onClick={showMoreHandler}
          >
            <Button text="Show more" size="18px" />
          </span>
        )}
        <div className="home__scroll-target" ref={scrollTarget}></div>
        <Modal isActive={isActive} setIsActive={setIsActive}>
          <NewArticle
            setIsActive={(isActive: boolean) => {
              setIsActive(isActive);
            }}
          />
        </Modal>
      </div>
    </div>
  );
};

export default HomePage;
