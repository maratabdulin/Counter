export type CounterStateType = {
    maxValue: number
    startValue: number
    currentValue: number
    settingMode: boolean
    settingError: boolean
}

let initialState: CounterStateType = {
    maxValue: 5,
    startValue: 0,
    currentValue: 0,
    settingMode: false,
    settingError: false
}

type SetMaxValueActionType = ReturnType<typeof setMaxValueAC>
type SetStartValueActionType = ReturnType<typeof setStartValueAC>
type SetValueActionType = ReturnType<typeof setValueAC>
type SetCounterActionType = ReturnType<typeof setCounterAC>
type ChangeModeActionType = ReturnType<typeof changeModeCounterAC>

type ActionType = SetMaxValueActionType | SetStartValueActionType | SetValueActionType | SetCounterActionType | ChangeModeActionType

export const counterReducer = (state: CounterStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET_VALUE':
            return {...state, currentValue: action.newValue}
        case 'SET_MAX_VALUE':
            return {
                ...state,
                maxValue: action.maxValue,
                settingError: action.settingError,
                settingMode: true,
            }
        case 'SET_START_VALUE':
            return {
                ...state,
                startValue: action.startValue,
                settingError: action.settingError,
                settingMode: true,
            }
        case 'SET_COUNTER':
            return {
                ...state,
                startValue: action.value,
                currentValue: action.value,
                maxValue: action.maxValue,
                settingMode: false
            }
            case 'CHANGE_MODE_COUNTER':
                return {
                    ...state, settingMode: true
                }
        default:
            return state
    }
}

export const setValueAC = (newValue: number) => {
    return {
        type: 'SET_VALUE',
        newValue
    } as const
}

export const setMaxValueAC = (maxValue: number, settingError: boolean) => {
    return {
        type: 'SET_MAX_VALUE',
        maxValue,
        settingError
    } as const
}

export const setStartValueAC = (startValue: number, settingError: boolean) => {
    return {
        type: 'SET_START_VALUE',
        startValue,
        settingError
    } as const
}

export const setCounterAC = (maxValue: number, value: number) => {
    return {
        type: 'SET_COUNTER',
        maxValue,
        value,
    } as const
}

export const changeModeCounterAC = () => {
    return {
        type: 'CHANGE_MODE_COUNTER',
    } as const
}
