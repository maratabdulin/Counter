import React, {FC} from 'react';
import Button from '../Button/Button';
import s from './Counter.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/store';
import {incrementValueAC, setValueAC} from '../../redux/counter-reducer';

type CounterType = {
    // maxValue: number
    // startValue: number
    // count: number
    // setCount: (value: number) => void
    // enterValues: boolean
    // settingsError: boolean
}


const Counter: FC<CounterType> = (props) => {
    const dispatch = useDispatch()
    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
    const count = useSelector<AppRootStateType, number>(state => state.counter.currentValue)
    const enterValues = useSelector<AppRootStateType, boolean>(state => state.counter.enterValues)
    const settingsError = useSelector<AppRootStateType, boolean>(state => state.counter.settingsError)

    const onClickIncrement = () => {
        dispatch(incrementValueAC())
        // props.setCount(props.count + 1)
    }

    const onClickReset = () => {
        dispatch(setValueAC(startValue))
        // props.setCount(props.startValue);
    }

    let counterClassName = s.counter;
    if (!enterValues && count === maxValue) {
        counterClassName = [s.counter, s.counterErrorMaxValue].join(' ')
    }
    if (enterValues) {
        counterClassName = [s.counter, s.counterEnterValues].join(' ')
    }
    if (settingsError) {
        counterClassName = [s.counter, s.counterErrorSettings].join(' ')
    }

    let counterMessage = settingsError ? 'Incorrect Value' : 'Enter values and press "set"'

    return (
        <div className={s.wrapper}>
            <div className={counterClassName}>
                {enterValues ? counterMessage : count}
            </div>
            <div className={s.buttonsWrapper}>
                <Button onClick={onClickIncrement} buttonDisabled={count === maxValue || enterValues}> INC </Button>
                <Button onClick={onClickReset} buttonDisabled={count === startValue || enterValues}> RESET </Button>
            </div>
        </div>
    )
}

export default Counter;
