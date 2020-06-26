import React from 'react'
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home'

const NavBar = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/" activeClassName="active">
                            <HomeIcon />
                        </NavLink>
                        <NavLink to="/goal-setting" activeClassName="active">Manage Goal</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
};

export default NavBar;

