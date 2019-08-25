import React, { createContext, useState } from 'react';
import uuid from 'uuid/v1';

export const GameContext = createContext();

export const GameContextProvider = (props) => {
    const [ Games, setGames ] = useState([
        { name: 'PUBG Mobile', company: 'Tencent Games', id: 1 },
        { name: 'Coin Master', company: 'Moonactive', id: 2 },
        { name: 'Mobile Legend', company: 'Moonton', id: 3}
    ]);

    const addGame = ( name, company ) => {
        setGames([
            ...Games,
            {
                name,
                company,
                id: uuid()
            }
        ]);
    }

    const removeGame = ( id ) => {
        setGames(Games.filter(Game => Game.id !== id ));
    }

    return(
        <GameContext.Provider value={{ Games, addGame, removeGame }}>
            { props.children }
        </GameContext.Provider>
    );
}