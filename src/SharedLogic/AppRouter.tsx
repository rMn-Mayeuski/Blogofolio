import React, {FC, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Navigate, Route, Routes} from "react-router-dom";

import {PRIVATE_ROUTES, PUBLIC_ROUTES} from "../constants/Routes";
import { handleGetUser } from './asuncActions/UserActions';

const AppRouter: FC = () => {

    const dispatch = useDispatch();

    // @ts-ignore
    const { isAuth }: boolean = useSelector( state => state?.user );

    const handleGetUserSession = async () => {
        const accessToken = localStorage.getItem("access") || "";
        const refreshToken = localStorage.getItem("refresh") || "";

        // @ts-ignore
        dispatch(handleGetUser(accessToken, refreshToken));
    };

    useEffect(() => {
        handleGetUserSession()
    }, [])

    return (
            <Routes>
                {isAuth
                    ?
                    PRIVATE_ROUTES.map(({ path, Element}) => <Route key={path} path={path} element={<Element />} />)
                    :
                    PUBLIC_ROUTES.map(({ path, Element}) => <Route key={path} path={path} element={<Element />} />)
                }
                <Route path={"*"} element={<Navigate to={isAuth ? "/home" : "/signin"} replace />} />
            </Routes>
    );
};

export default AppRouter;