import React from 'react'
import "./Button.scss";

const Button: React.FC<PropsType> = ({text, size="18px"}) => {

    const style = {
        fontSize: size,
    }

    return <button className="button" style={style} >{text}</button>
}

export default Button

// Types

type PropsType = {
    text: string;
    size?: string;
}
