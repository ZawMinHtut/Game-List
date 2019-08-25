import React, { useContext, useState } from 'react';
import { GameContext, ThemeContext } from '../contexts';

export const GameForm = () => {
    const [ Name, setName ] = useState('');
    const [ Company, setCompany ] = useState('');
    const { addGame } = useContext(GameContext);
    const { Themes } = useContext(ThemeContext);
    const Theme = Themes.isLightTheme ? Themes.light : Themes.dark;
    const handleSubmit = (e) => {
        e.preventDefault();
        addGame(Name, Company);
        setName('');
        setCompany('');
    }
    return(
        <form onSubmit={(e) => { handleSubmit(e); }} style={{background: Theme.ui}}>
            <input type="text" placeholder="Game's Name" onChange={(e) => {setName(e.target.value)}}
            value={Name} required />
            <input type="text" placeholder="Developed By" onChange={(e) => {setCompany(e.target.value)}}
            value={Company} required />
            <input type="submit" value="Add Game" style={{background: Theme.bg, color: Theme.syntax}} />
        </form>
    );
}