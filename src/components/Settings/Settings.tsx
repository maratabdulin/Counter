import React, {ChangeEvent, FC} from 'react';
import s from './Settings.module.css'
import Button from "../Button/Button";
import Input from "../Input/Input";
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../redux/store';
import {
    setEnterValuesModeAC,
    setMaxValueAC,
    setSettingsErrorModeAC,
    setStartValueAC, setValueAC
} from '../../redux/counter-reducer';

type SettingPropsType = {
    // setMaxValue: (value: number) => void
    // setStartValue: (value: number) => void
    // setEnterValues: (value: boolean) => void
    // maxValue: number
    // startValue: number
    // setCount: (value: number) => void
    // settingsError: boolean
    // setSettingsError: (value: boolean) => void
    // saveLocalStorage: () => void
}


const Settings: FC<SettingPropsType> = (props) => {
    const dispatch = useDispatch();
    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const startValue = useSelector<AppRootStateType, number>(state => state.counter.startValue)
    const settingsError = useSelector<AppRootStateType, boolean>(state => state.counter.settingsError)

    const settingHandler = () => {
        dispatch(setMaxValueAC(maxValue))
        // props.setMaxValue(maxValue);
        dispatch(setStartValueAC(startValue))
        // props.setStartValue(startValue)
        dispatch(setValueAC(startValue))
        // props.setCount(startValue)
        dispatch(setEnterValuesModeAC(false))
        // props.setEnterValues(false)

        // props.saveLocalStorage()
    }

    const maxValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSettingsErrorModeAC(+e.currentTarget.value < 0 || startValue < 0 || +e.currentTarget.value <= startValue ))
        // props.setSettingsError(+e.currentTarget.value < 0 || startValue < 0 || +e.currentTarget.value <= startValue )
        dispatch(setMaxValueAC(+e.currentTarget.value))
        // props.setMaxValue(+e.currentTarget.value)
        dispatch(setEnterValuesModeAC(true))
        // props.setEnterValues(true)
    }
    const startValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setSettingsErrorModeAC(+e.currentTarget.value < 0 || maxValue < 0 || +e.currentTarget.value >= maxValue ))
        // props.setSettingsError(+e.currentTarget.value < 0 || maxValue < 0 || +e.currentTarget.value >= maxValue )
        dispatch(setStartValueAC(+e.currentTarget.value))
        // props.setStartValue(+e.currentTarget.value)
        dispatch(setEnterValuesModeAC(true))
        // props.setEnterprops.setEnterValues(true)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.inputs}>
                <Input
                    labelTitle={'max-value: '}
                    value={maxValue}
                    onChange={maxValueInputHandler}
                    error={settingsError}
                />
                <Input
                    labelTitle={'start-value: '}
                    value={startValue}
                    onChange={startValueInputHandler}
                    error={settingsError}
                />
            </div>
            <div className={s.buttonsWrapper}>
                <Button onClick={settingHandler} buttonDisabled={settingsError}> SET </Button>
            </div>
        </div>
    );
};

export default Settings;
