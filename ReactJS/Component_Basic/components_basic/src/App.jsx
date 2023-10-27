
import './App.css';
import MovieList from './components/MovieList';
import movies from './assets/movies';
import Timer from './components/Timer';
import Counter from './components/Counter';

function App() {
  // const [count, setCount] = useState(0);

   return (
    <div>
      <h1>My First Dynamic React Application</h1>

      <Counter />

      {/* 
      <Timer startTime={1}/>
      <Timer startTime={2}/>
      <Timer startTime={3}/> */}

      <MovieList movies={movies} headingText="Movie List" />
    </div>
  )
}

export default App
