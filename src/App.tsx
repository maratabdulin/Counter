import React, {useState} from 'react';
import Counter from "./components/Counter/Counter";
import s from './App.module.css'
import Settings from "./components/Settings/Settings";
import {restoreState, saveState} from "./localStorage/localStorage";

type StateType = {
    maxValue: number
    startValue: number
}

const App = () => {
    const newValue = restoreState<StateType>('counter-value', {maxValue: 5, startValue: 0})
    const [maxValue, setMaxValue] = useState<number>(newValue?.maxValue ? newValue.maxValue : 5 );
    const [startValue, setStartValue] = useState<number>(newValue?.startValue ? newValue.startValue : 0);
    const [count, setCount] = useState<number>(startValue);
    const [enterValues, setEnterValues] = useState<boolean>(false);
    const [settingsError, setSettingsError] = useState<boolean>(false);

    const saveLocalStorage = () => {
        saveState<StateType>('counter-value', {maxValue, startValue})
    }

    return (
        <div className={s.container}>
            <Settings
                maxValue={maxValue}
                setMaxValue={setMaxValue}
                startValue={startValue}
                setStartValue={setStartValue}
                setCount={setCount}
                settingsError={settingsError}
                setSettingsError={setSettingsError}
                setEnterValues={setEnterValues}
                saveLocalStorage={saveLocalStorage}
            />
            <Counter
                maxValue={maxValue}
                startValue={startValue}
                count={count}
                setCount={setCount}
                enterValues={enterValues}
                settingsError={settingsError}
            />
        </div>
    );
};

export default App;
