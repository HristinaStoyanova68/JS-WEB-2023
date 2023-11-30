
import { useContext, useEffect, useReducer, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import * as gameService from '../../services/gameService';
import * as commentService from '../../services/commentService';
import AuthContext from '../../contexts/authContext';
import reducer from './commentsReducer';
import useForm from '../../hooks/useForm';
import Path from '../../paths';
import { pathToUrl } from '../../utils/pathUtils';

export default function GameDetails() {
    const { email, userId } = useContext(AuthContext);
    const [game, setGame] = useState({});
    const [comments, dispatch] = useReducer(reducer, []);

    const { gameId } = useParams();

    useEffect(() => {
        gameService.getOne(gameId)
            .then(setGame)
            .catch(err => console.log(err));

        commentService.getAll(gameId)
            .then((result) => {
                dispatch({
                    type: 'GET_ALL_GOMMENTS',
                    payload: result,
                })
            })
            .catch(err => console.log(err));
    }, [gameId]);

    const addCommentHandler = async (values) => {

        const newComment = await commentService.create(
            gameId,
            values.comment,
        );

        newComment.owner = { email };

        dispatch({
            type: 'ADD_COMMENT',
            payload: newComment,
        });
    };

    const { values, onChange, onSubmit } = useForm(addCommentHandler, {
        comment: '',
    });

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="game-header">
                    <img className="game-img" src={game.imageUrl} alt={game.title} />
                    <h1>{game.title}</h1>
                    <span className="levels">MaxLevel: {game.maxLevel}</span>
                    <p className="type">{game.category}</p>
                </div>

                <p className="text">
                    {game.summary}
                </p>

                {/* <!-- Bonus ( for Guests and Users ) --> */}
                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {/* <!-- list all comments for current game (If any) --> * */}
                        {comments.map(({ _id, text, owner: { email } }) => (
                            <li key={_id} className="comment">
                                <p>{email}: {text}</p>
                            </li>
                        ))}
                    </ul>
                    {/* <!-- Display paragraph: If there are no games in the database --> */}
                    {comments.length === 0 && (
                        <p className="no-comment">No comments.</p>
                    )}



                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                {userId === game._ownerId &&
                    <div className="buttons">
                        <Link to={pathToUrl(Path.GameEdit, { gameId })} className="button">Edit</Link>
                        <Link to={pathToUrl(Path.GameDelete, { gameId })} className="button">Delete</Link>
                    </div>
                }

            </div>

            {/* <!-- Bonus --> */}
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form" onSubmit={onSubmit}>
                    {/* <input    
                    type='text' 
                    name='username' 
                    placeholder='username'
                    value={usernameValue}
                    onChange={usernameChangeHandler} */}
                    {/* // onBlur={usernameBlurHandler} */}
                    {/* // /> */}
                    <textarea
                        name="comment"
                        placeholder="Comment......"
                        value={values.comment}
                        onChange={onChange}
                    ></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>

        </section>
    );
}