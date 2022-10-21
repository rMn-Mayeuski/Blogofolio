import React from 'react';
import styles from "../Tabs.module.scss"

export interface ITab {
    id: number;
    title: string;
    disabled?: boolean;
}

interface TabItemProps extends ITab {
    activeTabItem: number
    onClick: any
}

const Tab: React.FC<TabItemProps> = ({
    id, 
    activeTabItem, 
    title= "", 
    onClick, 
    disabled=false
}) => {
    return (
        <button 
            onClick={!disabled ? onClick : () => {}}
            disabled={disabled}
            className={styles.underline}>
                {title}
        </button>
    );
};

export default Tab;