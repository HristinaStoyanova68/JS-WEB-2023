import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import * as authService from './services/authService';
import AuthContext from './contexts/authContext';
import Path from './paths';

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import GameList from './components/game-list/GameList';
import GameCreate from './components/game-create/GameCreate';
import Register from './components/register/Register';
import Login from './components/login/Login';
import GameDetails from './components/game-details/GameDetails';

function App() {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = async (values) => {
        const {
            accessToken,
            email,
            username,
            _id,
        } = await authService.login(values.email, values.password);

        setAuth({
            accessToken,
            email,
            username,
            _id,
        });

        navigate(Path.Home);
    };

    const registerSubmitHandler = async (values) => {
        console.log(values);
    }

    const values = {
        registerSubmitHandler,
        loginSubmitHandler,
        username: auth.username,
        email: auth.email,
        isAuthenticated: !!auth.username,
    }

    return (
        <AuthContext.Provider value={values}>
            <div id="box">
                <Header />
                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path={Path.Games} element={<GameList />} />
                    <Route path='/games/create' element={<GameCreate />} />
                    <Route path='/games/:gameId' element={<GameDetails />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login />} />
                    {/* <Route path='/games/:id/comments' element={<} */}
                </Routes>
            </div>
        </AuthContext.Provider>
    )
}

export default App
