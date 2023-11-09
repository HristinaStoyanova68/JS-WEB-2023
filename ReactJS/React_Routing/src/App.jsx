import {Route, Routes} from 'react-router-dom';

import Navigation from './components/Navigation';
// import styles from './components/Navigation.module.css';
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import CharacterList from './components/CharacterList';
import CharactersDetails from './components/CharacterDetails';
import NotFound from './components/NotFound';

function App() {

  return (
    <>
        <Navigation />


        <Routes>
             <Route path='/' element={<Home />} /> 
             <Route path='/about' element={<About />} /> 
             <Route path='/contacts' element={<Contacts />} /> 
             <Route path='/characters' element={<CharacterList />} />
             <Route path='/characters/:id' element={<CharactersDetails />} />
             <Route path='*' element={<NotFound />} />
        </Routes>

      <footer>All rights reserved &copy;</footer>
    </>
  )
}

export default App;
