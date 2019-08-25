import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = (props) => {
    const [ Themes, setThemes ] = useState({
            isLightTheme: true,
            light: { ui: '#eee', syntax: '#333', bg: '#ddd' },
            dark: { ui: '#333', syntax: '#FFF', bg: '#555'}
        });
    return(
        <ThemeContext.Provider value={{Themes, setThemes}} >
            { props.children }
        </ThemeContext.Provider>
    );
}
