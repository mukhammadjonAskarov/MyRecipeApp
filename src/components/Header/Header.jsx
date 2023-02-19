import './header.scss'
import React, { useEffect } from "react";
import {MdLogin} from 'react-icons/md'
import Container from '../Container/Container';

function Header() {
  
    return <div className='root'>
        <Container>
            <div className='header'>
                <h2><a href='/'>Logo</a></h2>
                <ul className='header__login'>
                    <li>
                        <MdLogin size={28} />
                        <a href="/auth/login">Sigin</a>
                    </li>
                 </ul>
            </div>
        </Container>
  </div>;
}

export default Header;
