import React, { useContext } from 'react';
import { AdminContext } from '../contexts';

export const AdminLogin = () => {
    const { checkAdmin } = useContext(AdminContext);
    checkAdmin('zawminhtut');
    return(
        <div className="admin-login">
            <form onSubmit={(e) => { e.preventDefault(); }}>
                <label htmlFor="Name">User Name</label>
                <input type="text" required/>
                <label htmlFor="Password">Password</label>
                <input type="password" required/>
                <input type="submit" value="Login"/>
            </form>
        </div>
    );
}