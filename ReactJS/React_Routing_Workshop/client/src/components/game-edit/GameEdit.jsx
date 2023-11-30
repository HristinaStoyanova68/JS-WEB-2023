import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import * as gameService from '../../services/gameService';
import Path from "../../paths";

const editFormKeys = {
    Title: 'title',
    Category: 'category',
    MaxLevel: 'maxLevel',
    ImageUrl: 'imageUrl',
    Summary: 'summary',
};

export default function GameEdit() {
    const navigate = useNavigate();
    const { gameId } = useParams();
    const [game, setGame] = useState({
            [editFormKeys.Title]: '',
            [editFormKeys.Category]: '',
            [editFormKeys.MaxLevel]: '',
            [editFormKeys.ImageUrl]: '',
            [editFormKeys.Summary]: '',
        });

    useEffect(() => {
        gameService.getOne(gameId)
        .then(result => {
            setGame(result);
        });
    }, [gameId]);

    const editGameSubmitHandler = async (e) => {
        e.preventDefault();

        const values = Object.fromEntries(new FormData(e.currentTarget));

        try {
            await gameService.edit(gameId,values);

            navigate(Path.Games);
        } catch (err) {
            console.log(err);
        }
    };

    const onChange = (e) => {
        setGame(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    }

    return (       
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={editGameSubmitHandler}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input type="text" id="title" name="title" value={game[editFormKeys.Title]} onChange={onChange} />

                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={game[editFormKeys.Category]} onChange={onChange} />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input type="number" id="maxLevel" name="maxLevel" min="1" value={game[editFormKeys.MaxLevel]} onChange={onChange} />

                    <label htmlFor="game-img">Image:</label>
                    <input type="text" id="imageUrl" name="imageUrl" value={game[editFormKeys.ImageUrl]} onChange={onChange} />

                    <label htmlFor="summary">Summary:</label>
                    <textarea name="summary" id="summary" value={game[editFormKeys.Summary]} onChange={onChange}></textarea>
                    <input className="btn submit" type="submit" value="Edit Game" />
                </div>
            </form>
        </section>    
    );
}