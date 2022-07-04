import React, {ChangeEvent, DetailedHTMLProps, FC, InputHTMLAttributes, KeyboardEvent} from 'react'
import s from './Input.module.css'

// тип пропсов обычного инпута
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
// здесь мы говорим что у нашего инпута будут такие же пропсы как у обычного инпута
// (чтоб не писать value: string, onChange: ...; они уже все описаны в DefaultInputPropsType)
type InputNumberPropsType = DefaultInputPropsType & {
    labelTitle: string
    onChangeNumber?: (value: number) => void
    onEnter?: () => void
    error?: boolean
    spanClassName?: string
}

const Input:FC<InputNumberPropsType> = (
    {
        type,
        onChange,
        onChangeNumber,
        onKeyPress,
        onEnter,
        error,
        className,
        spanClassName,
        labelTitle,
        ...restProps
    }
) => {

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange // если есть пропс onChange
        && onChange(e) // то передать ему е (поскольку onChange не обязателен)
        onChangeNumber && onChangeNumber(+e.currentTarget.value)
    }

    const onKeyPressCallback = (e: KeyboardEvent<HTMLInputElement>) => {
        onKeyPress && onKeyPress(e);
        onEnter // если есть пропс onEnter
        && e.key === 'Enter' // и если нажата кнопка Enter
        && onEnter() // то вызвать его
    }

    const finalInputClassName = `${s.input} ${error ? s.errorInput : ''} ${className}`

    return (
        <label className={s.label}>
            <span className={s.inputTitle}>{labelTitle}</span>
            <input
                className={finalInputClassName}
                type='number'
                onChange={onChangeCallback}
                onKeyDown={onKeyPressCallback}
                {...restProps}
            />
        </label>
    );
};

export default Input;


