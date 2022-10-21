import { FC } from 'react';
import Tab, { ITab } from './Tab/Tab';
import styles from "./Tabs.module.scss"

interface ITabsProps {
    config: ITab[];
    activeTabItem: number;
    onClick: any;
}

const Tabs: FC<ITabsProps> = ({
    config = [],
    activeTabItem = 1,
    onClick = () => {},
}) => {
    return (
        <div className={styles.tabsContainer}>
            {config.map(tab => (
                <Tab
                    key={tab.id}
                    id={tab.id}
                    title={tab.title}
                    disabled={tab.disabled}
                    onClick={() => onClick(tab.id)}
                    activeTabItem={activeTabItem}
                />
            ))}
        </div> 
    );
};

export default Tabs;