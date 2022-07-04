import React, {useState} from 'react';
import Counter from "./components/Counter/Counter";
import s from './App.module.css'
import Settings from "./components/Settings/Settings";

type StateType = {
    maxValue: number
    startValue: number
}

const App = () => {

    const [maxValue, setMaxValue] = useState<number>(5);
    const [startValue, setStartValue] = useState<number>(1);
    const [count, setCount] = useState<number>(startValue);
    const [enterValues, setEnterValues] = useState<boolean>(false);
    const [settingsError, setSettingsError] = useState<boolean>(false);

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
