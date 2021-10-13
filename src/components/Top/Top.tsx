import { useDispatch, useSelector } from "react-redux";
import { actions } from "../../redux/homePage-reducer";
import { selectPostsPerRow } from "../../redux/homePage-selectors";
import Button from "../Button/Button";

export const Top: React.FC<TopPropsType> = (props) => {

    const dispatch = useDispatch();
  
    const postsPerRow = useSelector(selectPostsPerRow);
  
    const postsPerRowHandler = () => {
      dispatch(actions.postsPerRowChanged());
    };
  
    return (
      <div className="home__top">
            <h2 className="home__title">{`${props.title} list`}</h2>
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
                  props.changeActive();
                }}
              >
                <Button text={"Add " + props.title.toLowerCase()} size="16px" />
              </span>
            </div>
          </div>
    )
  }
  
  // Top Types
  type TopPropsType = {
    title: string;
    changeActive: () => void;
  }