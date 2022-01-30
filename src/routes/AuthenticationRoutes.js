import React, { lazy } from 'react';
import Loadable from 'ui-component/Loadable';

import MinimalLayout from 'layout/MinimalLayout';
import { NAVIGATION_ROUTES } from './constant/RoutesConstant';

const LoginView = Loadable(lazy(() => import('views/login/controller/LoginController')));
const RegisterView = Loadable(lazy(() => import('views/register/controller/RegisterController')));

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: NAVIGATION_ROUTES.signIn,
            element: <LoginView />
        },
        {
            path: NAVIGATION_ROUTES.register,
            element: <RegisterView />
        }
    ]
};

export default AuthenticationRoutes;
