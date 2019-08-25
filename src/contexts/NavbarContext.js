import React, { createContext, useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export const NavbarContext = createContext();

export const NavbarContextProvider = ( props ) => {
    const { Themes, setThemes } = useContext(ThemeContext);
    const handleAdmin = () => {
        console.log('Admin Login');
    }

    const handleTheme = () => {
        setThemes({
            ...Themes,
            isLightTheme: !Themes.isLightTheme
        })
    }

    return(
        <NavbarContext.Provider value={ { handleAdmin, handleTheme } }>
            { props.children }
        </NavbarContext.Provider>
    );
}