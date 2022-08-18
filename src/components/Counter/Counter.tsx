import React, {FC} from 'react';
import Button from '../Button/Button';
import s from './Counter.module.css'
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/store';
import {changeModeCounterAC, setValueAC} from '../../redux/counter-reducer';

type CounterPropsType = {
    maxValue: number
    startValue: number
}

const Counter: FC<CounterPropsType> = ({maxValue,startValue}) => {
    const dispatch = useDispatch()
    const count = useSelector<AppRootStateType, number>(state => state.counter.currentValue)

    const onClickIncrement = () => dispatch(setValueAC(count + 1))
    const onClickReset = () => dispatch(setValueAC(startValue))
    const onClickSet = () => dispatch(changeModeCounterAC())

    let counterClassName = (count === maxValue) ? `${s.counter} ${s.counterErrorMaxValue}` : s.counter;

    return (
        <div className={s.wrapper}>
            <div className={counterClassName}>
                {count}
            </div>
            <div className={s.buttonsWrapper}>
                <Button onClick={onClickIncrement} buttonDisabled={count === maxValue}> INC </Button>
                <Button onClick={onClickReset} buttonDisabled={count === startValue}> RESET </Button>
                <Button onClick={onClickSet}> SET</Button>
            </div>
        </div>
    )
}

export default Counter;
