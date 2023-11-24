
import { Routes, Route } from 'react-router-dom';


import { AuthProvider } from './contexts/authContext';
import Path from './paths';

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import GameList from './components/game-list/GameList';
import GameCreate from './components/game-create/GameCreate';
import Register from './components/register/Register';
import Login from './components/login/Login';
import GameDetails from './components/game-details/GameDetails';
import Logout from './components/logout/Logout';

function App() {

    return (
        <AuthProvider value={values}>
            <div id="box">
                <Header />
                <Routes>
                    <Route path={Path.Home} element={<Home />} />
                    <Route path={Path.Games} element={<GameList />} />
                    <Route path='/games/create' element={<GameCreate />} />
                    <Route path='/games/:gameId' element={<GameDetails />} />
                    <Route path={Path.Register} element={<Register />} />
                    <Route path={Path.Login} element={<Login />} />
                    <Route path={Path.Logout} element={<Logout />} />
                </Routes>
            </div>
        </AuthProvider>
    )
}

export default App;
