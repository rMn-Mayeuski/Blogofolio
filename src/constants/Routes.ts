import React, {FC} from "react";

import {RouteObject} from "react-router-dom";
import AddPost from "../Pages/AddPostPage/AddPost";
import MainPage from "../Pages/MainPage/MainPage";
import NewPassPage from "../Pages/NewPassPage/NewPassPage";
import PostContentPage from "../Pages/PostContentPage/PostContentPage";
import ReserPassPage from "../Pages/ResetPassPage/ReserPassPage";
import SignInPage from "../Pages/SignInPage/SignInPage";
import SingUpPage from "../Pages/SingUpPage/SingUpPage";

export interface IRoute extends RouteObject{
    path: string,
    Element: FC,
    title?: string
}

export enum Routes {
    signIn = "/signin",
    signUp = "/signup",
    blog = "/home",
    post = "/contentpage/:id",
    search = "/search",
    addPost = "/addpost",
    resetPasswordEmail = "/reset",
    resetPassword = "/newpass",
}

export const PUBLIC_ROUTES: IRoute[] = [
    {path: Routes.signIn, Element: SignInPage},
    {path: Routes.signUp, Element: SingUpPage},
    {path: Routes.blog, Element: MainPage},
    {path: Routes.post, Element: PostContentPage},
    {path: Routes.resetPasswordEmail, Element: ReserPassPage},
    {path: Routes.resetPassword, Element: NewPassPage},
]

export const PRIVATE_ROUTES: IRoute[] = [
    ...PUBLIC_ROUTES,
    {path: Routes.search, Element: MainPage},
    {path: Routes.addPost, Element: AddPost},
]

