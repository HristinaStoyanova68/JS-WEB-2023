import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

const base_url = 'https://swapi.dev/api/people';

const CharacterDetails = () => {
    const { id } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const [character, setCharacter] = useState({});

    console.log(location.pathname);

    useEffect(() => {
        fetch(`${base_url}/${id}`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Not Found');
            }

            return res.json();
        })
        .then(setCharacter)
        .catch((err) => {
            navigate('/characters');
        })
    }, [id])

    const name = 'Unknown';
    return (
        <>
        <h1>{character.name}</h1>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum consequuntur quod nihil, sunt odio cupiditate veritatis vel asperiores incidunt possimus ipsum pariatur eaque? Eveniet aliquid facilis fugit vero, minima reiciendis!</p>
        </>
    );
};

export default CharacterDetails;
