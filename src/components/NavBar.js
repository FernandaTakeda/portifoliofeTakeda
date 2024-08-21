import { Link } from 'react-router-dom';
import React from 'react';


const navStyle = {
  display: 'flex', // Exibe os itens da lista em linha
  justifyContent: 'space-around', // Espaço uniforme entre os itens
  backgroundColor: '#333',
  padding: '1rem'
};

const listStyle = {
  listStyleType: 'none', // Remove os marcadores padrão
  margin: 0,
  padding: 0,
  display: 'flex' // Exibe os itens da lista em linha
};

const itemStyle = {
  margin: 0
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '1rem',
  padding: '0.5rem 1rem', // Adiciona espaçamento interno aos links
};

const linkHoverStyle = {
  textDecoration: 'underline'
};

const NavBar = () => {
  return (
    <nav style={navStyle}>
      <ul style={listStyle}>
        <li style={itemStyle}>
          <Link style={linkStyle} to="/" onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'} onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}>
            Fernanda Takeda (me)
          </Link>
        </li>
        <li style={itemStyle}>
          <Link style={linkStyle} to="/resume" onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'} onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}>
            Currículo
          </Link>
        </li>
        <li style={itemStyle}>
          <Link style={linkStyle} to="/portfolio" onMouseOver={(e) => e.currentTarget.style.textDecoration = 'underline'} onMouseOut={(e) => e.currentTarget.style.textDecoration = 'none'}>
            Portfólio
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

