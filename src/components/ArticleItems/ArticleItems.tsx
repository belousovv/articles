import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts, PostType } from "../../redux/homePage-reducer";
import ArticleItem from "../ArticleItem/ArticleItem";
import "./ArticleItems.scss";

const ArticleItems: React.FC<PropsType> = ({ visible, posts, postsPerRow }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const mappedPosts = posts
    ?.slice(0, visible)
    .map((p) => <ArticleItem key={p.id} title={p.title} text={p.body} postsPerRow={postsPerRow}/>);

  const styles = {
    gridTemplateColumns: `repeat(${postsPerRow}, 1fr)`
  }

  return <div
   className="article-items"
    style={styles}
  >{mappedPosts}</div>;
};

export default React.memo(ArticleItems);

// Types

type PropsType = {
  visible: number;
  posts: Array<PostType> | null;
  postsPerRow: number;
};
