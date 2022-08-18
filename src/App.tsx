import React from 'react';
import Counter from './components/Counter/Counter';
import s from './App.module.css'
import Settings from './components/Settings/Settings';
import {useSelector} from 'react-redux';
import {AppRootStateType} from './redux/store';

type StateType = {
    maxValue: number
    startValue: number
    settingMode: boolean
}

const App = () => {
    const state = useSelector<AppRootStateType, StateType>(state => state.counter)

    return (
        <div className={s.container}>
            {state.settingMode
                ? <Settings
                    maxValue={state.maxValue}
                    startValue={state.startValue}
                />
                : <Counter
                    maxValue={state.maxValue}
                    startValue={state.startValue}
                />
            }
        </div>
    );
};

export default App;
