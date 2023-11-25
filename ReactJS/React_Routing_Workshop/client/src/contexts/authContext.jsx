import { createContext, useState } from 'react';
import { useNavigate }from 'react-router-dom';

import * as authService from '../services/authService';
const AuthContext = createContext();

// AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password);

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.Home);
    };

    const registerSubmitHandler = async (values) => {
        console.log(values);
        const result = await authService.register(values.email, values.password);
        //TODO validations for passwords

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);


        navigate(Path.Home);

    };

    const logoutHandler = () => {
        setAuth({});

        localStorage.removeItem('accessToken');

        navigate(Path.Home);
    }

    const values = {
        registerSubmitHandler,
        loginSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        isAuthenticated: !!auth.accessToken,
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;