import React, { useContext } from 'react';
import { NavbarContext, ThemeContext } from '../contexts';

export const Navbar = () => {
    const { handleAdmin, handleTheme } = useContext(NavbarContext);
    const { Themes } = useContext(ThemeContext);
    const Theme = Themes.isLightTheme ? Themes.light : Themes.dark;
    return(
        <nav style={{background: Theme.ui, color: Theme.syntax}}>
            <h1 style={{background: Theme.bg}}>Game List</h1>
            <ul>
                <li style={{background: Theme.bg}} onClick={() => {handleAdmin()}}>Admin Login</li>
                <li style={{background: Theme.bg}} onClick={() => {handleTheme()}}>Change Theme</li>
            </ul>
        </nav>
    );
}