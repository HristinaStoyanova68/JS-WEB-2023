import Movie from "./Movie";

export default function MovieList (props) {

    return (
        <div className="movie-list">
            <h2>{props.headingText}</h2>
            <div>
                <ul>
                    <li><Movie data={props.movies[0]}/></li>
                    <li><Movie data={props.movies[1]}/></li>
                    <li><Movie data={props.movies[2]}/></li>
                    <li><Movie data={props.movies[3]}/></li>
                    <li><Movie data={props.movies[4]}/></li>
                    
                </ul>
            </div>
        </div>
    );
}