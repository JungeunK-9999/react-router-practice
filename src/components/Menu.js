import React from 'react';
import {Link} from 'react-router-dom';

const Menu=()=>{
    return(
        <div>
            <ul>
                <li><Link to="">HOME</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
                <li><Link to="/gallery">GALLERY</Link></li>
                <li><Link to="/posts">POSTS</Link></li>
            </ul>
        </div>
    );
};

export default Menu;