import { useEffect, useState } from "react";

import * as gameService from '../../services/gameService';
import LatestGames from "./latest-games/LatestGames";

export default function Home() {
    const [latestGames, setLatestGames] = useState([]);

    useEffect(() => {
        gameService.getLatestGames()
            .then(result => setLatestGames(result))
            // .catch(err => console.log(err));
    }, []);
    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in GamesPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Games</h1>

                {/* <!-- Display div: with information about every game (if any) --> */}
                {latestGames.map(game => <LatestGames {...game} />)}

                {/* <!-- Display paragraph: If there is no games  --> */}
                {!latestGames.length && <p className="no-articles">No games yet</p>}
            </div>
        </section>
    );
}