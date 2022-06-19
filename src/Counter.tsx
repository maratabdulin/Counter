import React, {useState} from "react";
import TabloSection from "./components/TabloSection";
import ButtonsSection from "./components/ButtonsSection";

function Counter() {
    const [count, setCount] = useState<number>(0)
    const onClickIncrement = () => setCount(count + 1)
    const onClickReset = () => setCount(0);
    const counterClassName = count === 5 ? 'counter counterMaxValue' : 'counter';

    return (
        <div className='wrapper'>
            <TabloSection
                className={counterClassName}
                count={count}
            />
            <ButtonsSection
                onClickIncrement={onClickIncrement}
                onClickReset={onClickReset}
                count={count}
            />
        </div>
    )
}

export default Counter;
