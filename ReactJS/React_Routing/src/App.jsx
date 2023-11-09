import {Route, Routes} from 'react-router-dom';

import './App.css'
import Navigation from './components/Navigation';
// import styles from './components/Navigation.module.css';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';

function App() {

  return (
    <>
      <h1>React Router</h1>

        <Navigation />

        <Routes>
             <Route path='/' element={<Home />}/> 
             <Route path='/about' element={<About />}/> 
             <Route path='/contacts' element={<Contacts />}/> 
        </Routes>

      <footer>All rights reserved &copy;</footer>
    </>
  )
}

export default App;
