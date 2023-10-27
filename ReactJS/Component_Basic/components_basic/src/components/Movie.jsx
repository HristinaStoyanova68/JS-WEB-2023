export default function Movie(props) {
    return (
        <article>
            <h3>{props.data.title}</h3>
            <p>Year: {props.data.year}</p>
            <p>Cast: {props.data.actors}</p>
        </article>
        
    );
}