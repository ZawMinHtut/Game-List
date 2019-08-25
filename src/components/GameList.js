import React, { useContext } from 'react';
import { GameContext, ThemeContext } from '../contexts';
import { GameDetails } from './GameDetails';

export const GameList = () => {
    const { Games } = useContext(GameContext);
    const { Themes } = useContext(ThemeContext);
    const Theme = Themes.isLightTheme ? Themes.light : Themes.dark;
    return Games.length ? (
        <div className="game-list" style={{background: Theme.ui}}>
            <p style={{background: Theme.bg, color: Theme.syntax}}>There're { Games.length } games to play! Happy Play Time xD</p>
            <ul style={{background: Theme.bg}}>
                {
                    Games.map(Game => <GameDetails Game={Game} key={Game.id} />)
                }
            </ul>
        </div>
    ) :
    (
        <div className="game-list" style={{background: Theme.ui}}>
            <p style={{background: Theme.bg, color: Theme.syntax}}>There's no game to play! What a sad Life T_T</p>
        </div>
    );
}