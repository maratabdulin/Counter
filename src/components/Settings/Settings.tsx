import React, {ChangeEvent, FC} from 'react';
import s from './Settings.module.css'
import Button from "../Button/Button";
import Input from "../Input/Input";

type SettingPropsType = {
    setMaxValue: (value: number) => void
    setStartValue: (value: number) => void
    setEnterValues: (value: boolean) => void
    maxValue: number
    startValue: number
    setCount: (value: number) => void
    settingsError: boolean
    setSettingsError: (value: boolean) => void
    saveLocalStorage: () => void
}


const Settings: FC<SettingPropsType> = (props) => {

    const settingHandler = () => {
        props.setMaxValue(props.maxValue);
        props.setStartValue(props.startValue)
        props.setCount(props.startValue)
        props.setEnterValues(false)
        props.saveLocalStorage()
    }

    const maxValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setSettingsError(+e.currentTarget.value < 0 || props.startValue < 0 || +e.currentTarget.value <= props.startValue )
        props.setMaxValue(+e.currentTarget.value)
        props.setEnterValues(true)
    }
    const startValueInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setSettingsError(+e.currentTarget.value < 0 || props.maxValue < 0 || +e.currentTarget.value >= props.maxValue )
        props.setStartValue(+e.currentTarget.value)
        props.setEnterValues(true)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.inputs}>
                <Input
                    labelTitle={'max-value: '}
                    value={props.maxValue}
                    onChange={maxValueInputHandler}
                    error={props.settingsError}
                />
                <Input
                    labelTitle={'start-value: '}
                    value={props.startValue}
                    onChange={startValueInputHandler}
                    error={props.settingsError}
                />
            </div>
            <div className={s.buttonsWrapper}>
                <Button onClick={settingHandler} buttonDisabled={props.settingsError}> SET </Button>
            </div>
        </div>
    );
};

export default Settings;
