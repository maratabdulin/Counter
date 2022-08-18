type CounterStateType = {
    maxValue: number
    startValue: number
    currentValue: number
    enterValues: boolean
    settingsError: boolean
}

let initialState: CounterStateType = {
    maxValue: 5,
    startValue: 0,
    currentValue: 0,
    enterValues: true,
    settingsError: false
}

type IncrementValueActionType = ReturnType<typeof incrementValueAC>
type SetMaxValueActionType = ReturnType<typeof setMaxValueAC>
type SetStartValueActionType = ReturnType<typeof setStartValueAC>
type SetCurrentValueActionType = ReturnType<typeof setEnterValuesModeAC>
type SetErrorActionType = ReturnType<typeof setSettingsErrorModeAC>
type SetValueActionType = ReturnType<typeof setValueAC>

type ActionType = IncrementValueActionType | SetMaxValueActionType | SetStartValueActionType
    | SetCurrentValueActionType | SetErrorActionType | SetValueActionType

export const counterReducer = (state: CounterStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'INCREMENT_VALUE':
            return {...state, currentValue: state.currentValue + 1}
        case 'SET_VALUE':
            return {...state, currentValue: action.newValue}
        case 'SET_MAX_VALUE':
            return {...state, maxValue: action.maxValue}
        case 'SET_START_VALUE':
            return {...state, startValue: action.startValue}
        case 'SET_ENTER_VALUE_MODE':
            return {...state, enterValues: action.valuesMode}
        case 'SET_SETTINGS_ERROR_MODE':
            return {...state, settingsError: action.settingsError}
        default:
            return state
    }
}

export const incrementValueAC = () => {
    return {
        type: 'INCREMENT_VALUE'
    } as const
}

export const setValueAC = (newValue:number) => {
    return {
        type: 'SET_VALUE',
        newValue
    } as const
}

export const setMaxValueAC = (maxValue: number) => {
    return {
        type: 'SET_MAX_VALUE',
        maxValue
    } as const
}

export const setStartValueAC = (startValue: number) => {
    return {
        type: 'SET_START_VALUE',
        startValue
    } as const
}

export const setEnterValuesModeAC = (valuesMode: boolean) => {
    return {
        type: 'SET_ENTER_VALUE_MODE',
        valuesMode
    } as const
}

export const setSettingsErrorModeAC = (settingsError: boolean) => {
    return {
        type: 'SET_SETTINGS_ERROR_MODE',
        settingsError
    } as const
}
