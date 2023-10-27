
import './App.css';
import MovieList from './components/MovieList';
import movies from './assets/movies';

function App() {
  // const [count, setCount] = useState(0);

   return (
    <div>
      <h1>My First Dynamic React Application</h1>

      <MovieList movies={movies} headingText="Movie List" />
    </div>
  )
}

export default App
