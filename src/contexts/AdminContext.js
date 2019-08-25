import React, { createContext, useState } from 'react';

export const AdminContext = createContext();

export const AdminContextProvider = (props) => {
    const [ Admins ] = useState({
        isAdmin: false,
        users: [
            {
                name: 'zawminhtut',
                password: 'zawminhtut'
            },
            {
                name: 'maryzaw',
                password: 'maryzaw'
            }
        ]
    });
    const checkAdmin = (name, password) => {
        const names = Admins.users.map(user => { return (user.name)});
        const passwords = Admins.users.map(user => { return (user.password)});
        if(name === names.find(checkName => checkName === name)){
            console.log('trueName');
            if(password === passwords.find(checkPassword => checkPassword === password)) {
                console.log('truePassword');
            }
        }
    }
    return (
        <AdminContext.Provider value={{Admins, checkAdmin}}>
            { props.children }
        </AdminContext.Provider>
    );
}