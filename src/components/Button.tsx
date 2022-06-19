import React from 'react';

type ButtonPropsType = {
    children: string
    onClick: () => void
    buttonDisabled: boolean
}

const Button: React.FC<ButtonPropsType> = (props) => {
    return (
        <button className='button'
                onClick={props.onClick}
                disabled={props.buttonDisabled}
        >
            {props.children}
        </button>
    );
};

export default Button;
