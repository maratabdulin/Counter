import {AppRootStateType} from '../redux/store';

const KEY = "redux";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem(KEY);
        if (!serializedState) return undefined;
        return JSON.parse(serializedState);
    } catch (e) {
        return undefined;
    }
};

export const saveState = (state: AppRootStateType) => {
    try {
        localStorage.clear()
        const serializedState = JSON.stringify(state);
        localStorage.setItem(KEY, serializedState);
    } catch (e) {

    }
};
