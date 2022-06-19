import React from 'react';
import Button from "./Button";

type ButtonSectionPropsType = {
    onClickIncrement: () => void
    onClickReset: () => void
    count: number

}

const ButtonsSection: React.FC<ButtonSectionPropsType> = (props) => {
    return (
        <div className='buttonsWrapper'>
            <Button
                onClick={props.onClickIncrement}
                buttonDisabled={props.count === 5}
            >
                INC
            </Button>
            <Button
                onClick={props.onClickReset}
                buttonDisabled={props.count === 0}
            >
                RESET
            </Button>
        </div>
    );
};

export default ButtonsSection;
