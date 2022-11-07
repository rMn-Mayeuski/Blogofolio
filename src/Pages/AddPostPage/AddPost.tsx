import React, { ChangeEventHandler, FC, MouseEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormInput, { InputError } from '../../components/FormInput/FormInput';
import HomeLink from '../../components/HomeLink/HomeLink';
import MainFormBTN from '../../components/MainFormBTN/MainFormBTN';
import Title from '../../components/Title/Title';
import { Routes } from '../../constants/Routes';
import PostsService from '../../services/postsService';
import TextArea from './TextAria/TextArea';
import styles from "./AddPost.module.scss";

interface AddPostFormState {
    title: string
    image: File | null
    imageName: string
    description: string
    text: string
}

export interface TextareaError {
    text: string | null
    error: boolean
}

interface IFormErrors {
    title: InputError
    image: InputError
    description: TextareaError
    text: TextareaError
}

const postFormInitialState = {
    title: "",
    image: null,
    imageName: "",
    description: "",
    text: ""
};

const initialErrorValue = {text: null, error: false};

const initialFormElementsError: IFormErrors = {
    title: initialErrorValue,
    image: initialErrorValue,
    description: initialErrorValue,
    text: initialErrorValue
};

const AddPost: FC = () => {

    const navigate = useNavigate();

    const [addPostForm, setPostForm] = useState<AddPostFormState>(postFormInitialState);
    const [formFieldsError, setFormFieldsError] = useState<IFormErrors>(initialFormElementsError);
    const [imagePreview, setImagePreview] = useState<any>("");

    const handleFilePreviewRemove = () => {
        setImagePreview("");
        setPostForm(prevState => ({...prevState, image: null, imageName: ""}));
    }

    const handleFileReset: MouseEventHandler<HTMLSpanElement> = (event) => {
        event.stopPropagation();
        handleFilePreviewRemove();
    }

    const handleSetTitle: ChangeEventHandler<HTMLInputElement> = ({target: {value: title}}) => {
        setFormFieldsError(prevState => ({...prevState, title: initialErrorValue}));
        setPostForm(prevState => ({...prevState, title}));
    }

    const handleSetText: ChangeEventHandler<HTMLTextAreaElement> = ({target: {value: text}}) => {
        setFormFieldsError(prevState => ({...prevState, text: initialErrorValue}));
        setPostForm(prevState => ({...prevState, text}));
    }

    const handleSetDescription: ChangeEventHandler<HTMLTextAreaElement> = ({target: {value: description}}) => {
        setFormFieldsError(prevState => ({...prevState, description: initialErrorValue}));
        setPostForm(prevState => ({...prevState, description}));
    }

    const handleSetImage: ChangeEventHandler<HTMLInputElement> = (event) => {
        const file = event?.target?.files?.[0];
        const reader = new FileReader();

        reader.addEventListener("load", () => setImagePreview(reader.result));

        if (file) {
            reader.readAsDataURL(file)
        } else {
            handleFilePreviewRemove()
        }

        setFormFieldsError(prevState => ({...prevState, image: initialErrorValue}));
        setPostForm(prevState => ({...prevState, imageName: event?.target?.value, image: file || null}));
    }

    const handleFormValidate = () => {
        let isValid = true;

        for (let field in addPostForm) {
            // @ts-ignore
            if (!addPostForm[field]) {
                // @ts-ignore
                setFormFieldsError(prevState => ({...prevState, [field]: {error: true, text: "Required field is empty"}}))
                isValid = false
            }
        }

        return isValid
    }

    const handlePostCreate = async () => {
        const isValid = handleFormValidate();

        if (isValid) {
            const data = {
                title: addPostForm.title,
                text: addPostForm.text,
                image: addPostForm.imageName,
                lesson_num: 77
            }

            await PostsService.addPost(data, localStorage.getItem("access") || "");
        }
    }

    const handleCancelPostCreation = () => {
        setPostForm(postFormInitialState);
        setFormFieldsError(initialFormElementsError);
        setImagePreview("");
    }

    const handleDeletePost = () => navigate(Routes.blog);

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
                            id="title"
                            value={addPostForm.title}
                            onChange={handleSetTitle}
                            error={formFieldsError?.title}
                        />
                        <FormInput 
                            label={'URL'} 
                            placeholder={'URL'} 
                            type={'url'} 
                            id="url"
                        />
                    </div>
                    <div className={styles.addPostConteinerFormBottom}>
                    <FormInput 
                        label={'Publish at'} 
                        placeholder={''} 
                        type={'date'} 
                        id="date"
                        />
                    <FormInput 
                        label={'Image'} 
                        placeholder={''} 
                        type={'file'} 
                        id="image"
                        value={addPostForm.imageName}
                        onChange={handleSetImage}
                        onFileReset={handleFileReset}
                        error={formFieldsError?.image}
                        />
                    </div>
                    {!!imagePreview && <img src={imagePreview} className={styles.imgPreview} alt="preview" />}
                    <TextArea
                        title="Description"
                        id="description"
                        onChange={handleSetDescription}
                        value={addPostForm.description}
                        error={formFieldsError?.description}
                        required
                        cols={40}
                        rows={3}
                        minLength={20}
                        placeholder="Add your text"
                    />
                    <TextArea
                        title="Text"
                        id="text"
                        onChange={handleSetText}
                        value={addPostForm.text}
                        error={formFieldsError?.text}
                        required
                        cols={40}
                        rows={10}
                        minLength={20}
                        placeholder="Add your text"
                    />
                    <div className={styles.addPostConteinerFormBtns}>
                        <button className={styles.addPostConteinerFormBtnsDel}
                            onClick={handleDeletePost}
                            type='reset'>
                                Reset
                        </button>
                        <div className={styles.addPostConteinerFormBtnsLeft}>
                            <button
                                onClick={handleCancelPostCreation}
                                type='button' 
                                className={styles.addPostConteinerFormBtnsLeftCancel}>
                                    Cancel
                            </button>
                            <MainFormBTN text={'Add post'} onSubmit={handlePostCreate}/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddPost;