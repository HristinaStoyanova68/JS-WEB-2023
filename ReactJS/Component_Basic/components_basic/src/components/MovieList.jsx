import Heading from "./Heading";
import Movie from "./Movie";

export default function MovieList (props) {

    return (
        <div className="movie-list">
            <Heading>{props.headingText}</Heading>
            <div>
                <ul>
                    <li><Movie movieData={props.movies[0]}/></li>
                    <li><Movie movieData={props.movies[1]}/></li>
                    <li><Movie movieData={props.movies[2]}/></li>
                    <li><Movie movieData={props.movies[3]}/></li>
                    <li><Movie movieData={props.movies[4]}/></li>
                    
                </ul>
            </div>
        </div>
    );
}