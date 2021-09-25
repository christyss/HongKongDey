import React from 'react';
import {Link} from 'react-router-dom';
import './HomeNav.scss';

function HomeNav() {
    return (
        <div className="header">
            <ul className="header-list">
                <Link to={`/signin`} className="header-list__item">Sign in/ Sign up</Link>
            </ul>
        </div>
    )
}

export default HomeNav
