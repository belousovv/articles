import React from "react";
import "./ArticleItem.scss";

const ArticleItem: React.FC<PropsType> = ({ title, text, postsPerRow }) => {
  const styles = {
    maxWidth: postsPerRow === 3 ? "376px" : "100%",
  };

  return (
    <div className="article-item" style={styles}>
      <h4 className="article-item__title">{title}</h4>
      <p className="article-item__text">{text}</p>
      <div className="article-item__buttons">
        <button className="article-item__btn">View</button>
        <button className="article-item__btn">Change Color</button>
      </div>
    </div>
  );
};

export default React.memo(ArticleItem);

// Types

type PropsType = {
  title: string;
  text: string;
  postsPerRow: number;
};
