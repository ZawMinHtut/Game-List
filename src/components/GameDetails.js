import React, { useContext } from 'react';
import { GameContext, ThemeContext } from '../contexts';

export const GameDetails = ({ Game }) => {
    const { removeGame } = useContext(GameContext);
    const { Themes } = useContext(ThemeContext);
    const Theme = Themes.isLightTheme ? Themes.light : Themes.dark;
    return(
        <li onClick={() => { removeGame(Game.id) }} style={{ textDecorationColor : Theme.syntax, borderBottomColor: Theme.syntax}}>
            <div style={{color: Theme.syntax}}>{ Game.name }</div>
            <div style={{color: Theme.syntax}}>{ Game.company }</div>
        </li>
    );
}