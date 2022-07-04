import React, {FC} from "react";
import Button from "../Button/Button";
import s from './Counter.module.css'

type CounterType = {
    maxValue: number
    startValue: number
    count: number
    setCount: (value: number) => void
    enterValues: boolean
    settingsError: boolean
}

const Counter: FC<CounterType> = (props) => {
    const onClickIncrement = () => props.setCount(props.count + 1)
    const onClickReset = () => props.setCount(props.startValue);
    let counterClassName = !props.enterValues && props.count === props.maxValue ? [s.counter, s.counterError].join(' ') : s.counter;
    if (props.settingsError) {
        counterClassName = [s.counter, s.counterError].join(' ')
    }
    let counterMessage = props.settingsError ? 'Incorrect Value' : 'Enter values and press "set"'

    return (
        <div className={s.wrapper}>
            <div className={counterClassName}>
                {props.enterValues ? counterMessage : props.count}
            </div>
            <div className={s.buttonsWrapper}>
                <Button onClick={onClickIncrement} buttonDisabled={props.count === props.maxValue || props.enterValues}> INC </Button>
                <Button onClick={onClickReset} buttonDisabled={props.count === props.startValue || props.enterValues}> RESET </Button>
            </div>
        </div>
    )
}

export default Counter;
