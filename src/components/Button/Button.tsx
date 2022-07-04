import React from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    children: string
    onClick: () => void
    buttonDisabled?: boolean
}

const Button: React.FC<ButtonPropsType> = (props) => {
    return (
        <button className={s.button}
                onClick={props.onClick}
                disabled={props.buttonDisabled}
        >
            {props.children}
        </button>
    );
};

export default Button;
