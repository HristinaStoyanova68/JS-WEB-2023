import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import GameList from './components/game-list/GameList';
import GameCreate from './components/game-create/GameCreate';
import Register from './components/register/Register';
import Login from './components/login/Login';
import GameDetails from './components/game-details/GameDetails';
import AuthContext from './contexts/authContext';

function App() {
    const [auth, setAuth] = useState({});

    const loginSubmitHandler = (values) => {
        console.log(values);
    }

    return (
        <AuthContext.Provider value={{loginSubmitHandler}}>
            <div id="box">
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/games' element={<GameList />} />
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
