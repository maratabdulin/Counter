import React from 'react';

type TabloSectionPropsType = {
    count: number
    className: string
}

const TabloSection:React.FC<TabloSectionPropsType> = (props) => {
    return (
        <div className={props.className}>
            {props.count}
        </div>
    );
};

export default TabloSection;
