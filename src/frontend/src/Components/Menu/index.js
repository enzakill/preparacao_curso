import React from 'react';
import { Link } from 'react-router-dom'
import './styles.css'
import logo from '../../assets/logo.png'


import {TiLockClosed} from 'react-icons/ti'
import {TiBookmark} from 'react-icons/ti'
import {TiArrowDownThick} from 'react-icons/ti'
import {TiHome} from 'react-icons/ti'
import {TiSocialAtCircular} from 'react-icons/ti'
import {TiSocialInstagram} from 'react-icons/ti'
import {TiSocialFacebookCircular} from 'react-icons/ti'
import {TiSocialYoutube} from 'react-icons/ti'



const Menu = () => {
  return (
    <div className="Menu-container">
      <div className="Fundo-Logo"><img src={logo} alt="Logo" /></div>
      <ul>
        <li>
          <Link to="/home-gerencia">
            <TiHome size={25} style={{display: 'flex', marginLeft:'7px'}}/>
            Home
          </Link>
        </li>

        <li class="dropdown">
          <a href="javascript:void(0)" class="dropbtn">
            <TiArrowDownThick size={25} style={{display: 'flex', marginLeft:'17px'}}/>
            Máterias
          </a>
          <div class="dropdown-content">
            <Link>Física</Link>
            <Link>Matemática</Link>
            <Link>Química</Link>
            <Link>Biologia</Link>
            <Link>Gramática</Link>
            <Link>História</Link>
            <Link>Geografia</Link>
            <Link>Atualidades</Link>
            <Link>Filosofia</Link>
            <Link>Sociologia</Link>
            <Link>Artes</Link>
            <Link>Inglês</Link>
            <Link>Espanhol</Link>
          </div>
        </li>

        <li>
          <Link to="/home-almox">
            <TiBookmark size={25} style={{display: 'flex', marginLeft:'17px'}}/>
            Apostilas
          </Link>
        </li>

        <li >
              <Link to="/login">
                <TiLockClosed size={25} style={{display: 'flex', marginLeft:'45px'}}/>
                Área do professor
              </Link> 
        </li>

        <li class="dropdown">
          <a href="javascript:void(0)" class="dropbtn">
            <TiSocialAtCircular size={25} style={{display: 'flex', marginLeft:'25px'}}/>
            Rede Social
          </a>
          <div class="dropdown-content">
          <Link to="/login">
                <TiSocialInstagram size={20} style={{display: 'flex', marginLeft:'20px'}}/>
                Instagram
          </Link> 
          <Link to="/login">
                <TiSocialFacebookCircular size={20} style={{display: 'flex', marginLeft:'20px'}}/>
                Facebook
              </Link>
              <Link to="/login">
                <TiSocialYoutube size={20} style={{display: 'flex', marginLeft:'20px'}}/>
                Youtube
              </Link> 
            
          </div>
        </li>


      </ul>

    </div>
  )
}



export default Menu;