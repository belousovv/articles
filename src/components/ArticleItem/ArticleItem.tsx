import React, { useState } from "react";
import { PostType } from "../../redux/homePage-reducer";
import Modal from "../Modal/Modal";
import "./ArticleItem.scss";

const ArticleItem: React.FC<PropsType> = ({
  title,
  text,
  postsPerRow,
  post,
}) => {
  const [isInfoActive, setIsInfoActive] = useState(false);
  const [isColorActive, setIsColorActive] = useState(false);
  const [color, setColor] = useState<"#ccc" | "#c6baba" | "#bcc6ba">("#ccc");

  const styles = {
    maxWidth: postsPerRow === 3 ? "376px" : "100%",
    backgroundColor: color,
  };

  return (
    <div className="article-item" style={styles}>
      <h4 className="article-item__title">{title}</h4>
      <p className="article-item__text">{text}</p>
      <div className="article-item__buttons">
        <button
          className="article-item__btn"
          onClick={() => {
            setIsInfoActive(true);
          }}
        >
          View
        </button>
        <button
          className="article-item__btn"
          onClick={() => {
            setIsColorActive(true);
          }}
        >
          Change Color
        </button>
      </div>
      <Modal isActive={isInfoActive} setIsActive={setIsInfoActive}>
        <div className="info-modal">
          <h6 className="info-modal__title">Article Info</h6>
          <div className="info-modal__content">
            <h4 className="info-modal__content-title">{post.title}</h4>
            <p className="info-modal__content-text">{post.body}</p>
          </div>
        </div>
      </Modal>
      <Modal isActive={isColorActive} setIsActive={setIsColorActive}>
        <div className="color-modal">
          <ul className="color-modal__list">
            <li
              className="color-modal__item color-modal__item--grey"
              onClick={() => {
                setColor("#ccc");
              }}
            >
              default
            </li>
            <li
              className="color-modal__item color-modal__item--red"
              onClick={() => {
                setColor("#c6baba");
              }}
            >
              red
            </li>
            <li
              className="color-modal__item color-modal__item--green"
              onClick={() => {
                setColor("#bcc6ba");
              }}
            >
              green
            </li>
          </ul>
        </div>
      </Modal>
    </div>
  );
};

export default React.memo(ArticleItem);

// Types

type PropsType = {
  title: string;
  text: string;
  postsPerRow: number;
  post: PostType;
};
