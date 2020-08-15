import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu" position="fixed">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Aluraflix" />
      </Link>

      <div className="Buttons">
        <Button as={Link} className="ButtonLink" to="/cadastro/video">
          Novo Video
      </Button>
        <Button as={Link} to="/cadastro/categoria" className="link">

          Nova Categoria
  
      </Button>
      </div>

    </nav>
  );
}

export default Menu;
