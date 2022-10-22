import React, {FC} from 'react';
import { useSelector } from 'react-redux';
import {Navigate, Route, Routes} from "react-router-dom";

import {PRIVATE_ROUTES, PUBLIC_ROUTES} from "../constants/Routes";

const AppRouter: FC = () => {

    const { user } = useSelector((state: any) => state.user)

    return (
            <Routes>
                {user
                    ?
                    PRIVATE_ROUTES.map(({ path, Element}) => <Route key={path} path={path} element={<Element />} />)
                    :
                    PUBLIC_ROUTES.map(({ path, Element}) => <Route key={path} path={path} element={<Element />} />)
                }
                <Route path={"*"} element={<Navigate to={user ? "/home" : "/signin"} replace />} />
            </Routes>
    );
};

export default AppRouter;