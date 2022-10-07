import React from 'react';
import FormInput from '../../components/FormInput/FormInput';
import HomeLink from '../../components/HomeLink/HomeLink';
import MainFormBTN from '../../components/MainFormBTN/MainFormBTN';
import Title from '../../components/Title/Title';
import styles from "./AddPost.module.scss";

const AddPost: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.addPostConteiner}>
                <HomeLink/>
                <Title title='Add post'/>
                <form className={styles.addPostConteinerForm}> 
                    <div className={styles.addPostConteinerFormTop}>
                        <FormInput 
                            label={'Title'} 
                            placeholder={'Post title'} 
                            type={'text'} 
                            id={Math.random()}
                        />
                        <FormInput 
                            label={'URL'} 
                            placeholder={'URL'} 
                            type={'url'} 
                            id={Math.random()}
                        />
                    </div>
                    <div className={styles.addPostConteinerFormBottom}>
                    <FormInput 
                        label={'Publish at'} 
                        placeholder={''} 
                        type={'date'} 
                        id={Math.random()}
                        />
                    <FormInput 
                        label={'Image'} 
                        placeholder={''} 
                        type={'file'} 
                        id={Math.random()}
                        />
                    </div>
                    <div className={styles.addPostConteinerFormDescription}>
                        <label htmlFor="Description">Description</label>
                        <textarea 
                        id="Description" 
                        rows={10}
                        placeholder="Add your text">
                        </textarea>
                    </div>
                    <div className={styles.addPostConteinerFormText}>
                        <label htmlFor="Text">Text</label>
                        <textarea 
                        id="Text" 
                        rows={10}
                        placeholder="Add your text">
                        </textarea>
                    </div>
                    <div className={styles.addPostConteinerFormBtns}>
                        <button className={styles.addPostConteinerFormBtnsDel} 
                            type='reset'>
                                Reset
                        </button>
                        <div className={styles.addPostConteinerFormBtnsLeft}>
                            <button 
                                type='button' 
                                className={styles.addPostConteinerFormBtnsLeftCancel}>
                                    Cancel
                            </button>
                            <MainFormBTN text={'Add post'}/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPost;