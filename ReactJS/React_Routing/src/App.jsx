import {Route, Routes} from 'react-router-dom';

import Navigation from './components/Navigation';
// import styles from './components/Navigation.module.css';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import CharacterList from './components/CharacterList';

function App() {

  return (
    <>
        <Navigation />


        <Routes>
             <Route path='/' element={<Home />} /> 
             <Route path='/about' element={<About />} /> 
             <Route path='/contacts' element={<Contacts />} /> 
             <Route path='/characters' element={<CharacterList />} />
        </Routes>

      <footer>All rights reserved &copy;</footer>
    </>
  )
}

export default App;
