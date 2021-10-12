import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { actions, PostType } from "../../redux/homePage-reducer";
import Button from "../Button/Button";
import "./NewArticle.scss";

const NewArticle: React.FC<PropsType> = ({setIsActive}) => {

  const dispatch = useDispatch();

  const [tempTitle, setTempTitle] = useState("");
  const [tempDescription, setTempDescription] = useState("");
  const [title, setTitle] = useState<string | null>(null);
  const [description, setDescription] = useState<string | null>(null);

  const titleChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempTitle(e.currentTarget.value);
  };
  const descriptionChangeHandler = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTempDescription(e.currentTarget.value);
  };
  const submitHandler = () => {
    setTitle(tempTitle);
    setDescription(tempDescription);
  };

  useEffect(() => {
    if (title && description) {
      const post: PostType = {
        userId: 1,
        id: 1,
        title: title,
        body: description,
      };
      dispatch(actions.postAdded(post));
      setIsActive(false);
    }
  }, [title, description]);

  return (
    <div className="new-article">
      <div className="new-article__inner">
        <input
          type="text"
          className="new-article__title"
          placeholder="title"
          value={tempTitle}
          onChange={titleChangeHandler}
        />
        <textarea
          className="new-article__body"
          placeholder="description"
          value={tempDescription}
          onChange={descriptionChangeHandler}
        />
        <span className="new-article__create" onClick={submitHandler}>
          <Button text="Create" size="16px" />
        </span>
      </div>
    </div>
  );
};

export default NewArticle;

// Types

type PropsType = {
    setIsActive: (isActive: boolean) => void,
}
