import React, {ChangeEvent, FC} from 'react';
import s from './Settings.module.css'
import Button from '../Button/Button';
import Input from '../Input/Input';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/store';
import {
    setCounterAC,
    setMaxValueAC,
    setStartValueAC
} from '../../redux/counter-reducer';

type SettingPropsType = {
    maxValue: number
    startValue: number
}

const Settings: FC<SettingPropsType> = ({maxValue, startValue}) => {

    const dispatch = useDispatch();
    const settingError = useSelector<AppRootStateType, boolean>(state => state.counter.settingError)

    const settingHandler = () => dispatch(setCounterAC(maxValue, startValue))

    const maxValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value;
        const isError: boolean = value < 0 || startValue < 0 || value <= startValue
        dispatch(setMaxValueAC(value, isError))
    }
    const startValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const value = +e.currentTarget.value;
        const isError: boolean = value < 0 || maxValue < 0 || value >= maxValue
        dispatch(setStartValueAC(value, isError))
    }

    return (
        <div className={s.wrapper}>
            <div className={s.inputs}>
                <Input
                    labelTitle={'max value: '}
                    value={maxValue}
                    onChange={maxValueInputHandler}
                    error={settingError}
                />
                <Input
                    labelTitle={'start value: '}
                    value={startValue}
                    onChange={startValueInputHandler}
                    error={settingError}
                />
            </div>
            <div className={s.buttonsWrapper}>
                {settingError && <span className={s.errorMessage}>Incorrect value</span>}
                <Button onClick={settingHandler} buttonDisabled={settingError}> SET </Button>
            </div>
        </div>
    );
};

export default Settings;
