import { useEffect, useState } from 'react';

import * as gameService from '../../services/gameService';
import GameListItem from './game-list-item/GameListItem';

export default function GameList() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameService.getAll()
            .then(result => setGames(result))
            .catch(err => console.log(err));
    }, []);

    // console.log(games);
    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {/* <!-- Display div: with information about every game (if any) --> */}

            {games.map(game => (
                <GameListItem 
                // key={game._id} {...game} or 
                key={game._id}
                title={game.title}
                category={game.category}
                imageUrl={game.imageUrl}
                _id={game._id}
                />
            ))}

            {/* <!-- Display paragraph: If there is no games  --> */}
            {games.length === 0 && (
                <h3 className="no-articles">No articles yet</h3>
            )}
        </section>
    );
}

