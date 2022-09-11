import React from 'react';
import styles from "./ListPosts.module.scss"
import MainPost from './MainPost/MainPost';
import MPImg from "../../img/MainPostIMG.png"

const ID = Math.random() + 1;

const ListPosts: React.FC = () => {
    return (
        <section className='list-posts'>
            <div className="wrapper">
                <div className={styles.listPostsContainer}>
                    <MainPost
                    date={'2022-11-09'} 
                    title={'Astronauts prep for new solar arrays on nearly seven-hour spacewalk'}
                    text={'Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.'} 
                    image={MPImg} 
                    id={ID} 
                    />
                </div>
            </div>
        </section>
    );
};

export default ListPosts;