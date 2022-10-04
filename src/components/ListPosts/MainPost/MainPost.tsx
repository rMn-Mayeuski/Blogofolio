import React from 'react';
import ListPostsAction from '../ListPostsAction/ListPostsAction';
import styles from "./MainPost.module.scss"
import {IPost} from "../Test";
import { NavLink } from 'react-router-dom';

interface MainPostNav {
    to: string;
}

const MainPost:React.FC<IPost & MainPostNav> = ({
    date="April 20, 2021",
    title="Astronauts prep for new solar arrays on nearly seven-hour spacewalk", 
    description="Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.", 
    image="https://www.google.by/url?sa=i&url=https%3A%2F%2Fscienceandtech.ru%2Farticles%2Ffioletovyj-kosmos%2F&psig=AOvVaw15hNFOJR7Hhndl78m92Hoq&ust=1664965156838000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCPi8-NysxvoCFQAAAAAdAAAAABAD", 
    to
}) => {    
    return (
        <div className={styles.mainPostContent}>
            <NavLink to={to}>
                <div className={styles.mainPostContentTop}>
                    <div className={styles.mainPostContentLeft}>
                        <p className={styles.date}>{date}</p>
                        <h2 className={styles.mainPostTitle}>{title}</h2>
                        <p className={styles.mainPostText}>{description}</p>
                    </div>
                    <div className={styles.mainPostContentRight}>
                        <img src={image} alt="img" />
                    </div>
                </div>
            </NavLink>
        <ListPostsAction/>
    </div>
    );
};

export default MainPost;