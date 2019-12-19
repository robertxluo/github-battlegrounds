import React from 'react';
import { ThemeConsumer } from '../contexts/theme';
import { NavLink } from 'react-router-dom';

const activeStyle = {
  color: '#d50000'
};

export default function Nav() {
  return (
    <ThemeConsumer>
      {({ theme, toggleTheme }) => (
        <nav className="row space-between">
          <ul className="row navbar">
            <li>
              <NavLink exact to="/" activeStyle={activeStyle} className="nav-link">
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink to="/battle" activeStyle={activeStyle} className="nav-link">
                Battle
              </NavLink>
            </li>
          </ul>
          <button style={{ fontSize: 30, height: 50 }} className="btn-clear" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </nav>
      )}
    </ThemeConsumer>
  );
}
