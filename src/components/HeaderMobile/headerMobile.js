import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { Route, NavLink, Redirect } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import logoPinguin from '../../assets/image/pingouin-logo.png';

import './headerMobile.scss';

const HeaderMobile = ({ isLogged, username, handleLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickProfil = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleCloseProfil = () => {
    setAnchorE2(null);
  };
  return (
    <div className="headerMobileContent">
      <MenuIcon style={{ fontSize: 50 }} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} />
      <Menu
        className="menuBackground"
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}

      >
        <MenuItem
          onClick={handleClose}
        >
          <NavLink
            className="headerButtonMobile"
            to="/nos-motives"
            activeClassName="headerButtonMobile-active"
          >
            Nos Motivé(e)s
          </NavLink>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
        >
          <NavLink
            className="headerButtonMobile"
            to="/blog"
            activeClassName="headerButtonMobile-active"
          >
            Blog
          </NavLink>
        </MenuItem>
        <MenuItem
          onClick={handleClose}
        >
          <NavLink
            className="headerButtonMobile"
            to="/temoignages"
            activeClassName="headerButtonMobile-active"
          >
            Témoignages
          </NavLink>
        </MenuItem>
      </Menu>
      <div className="header-logo-content-mobile">
        <NavLink
          className="headerLogoContent"
          to="/"
          exact
        >
          <img className="logoPinguin" alt="" src={logoPinguin} />
        </NavLink>
      </div>
      {isLogged && (
        <div className="headerInscriptionConnexionMobile">
          <AccountCircleIcon style={{ fontSize: 50 }} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickProfil} />
          <Menu
            id="simple-menu"
            anchorEl={anchorE2}
            keepMounted
            open={Boolean(anchorE2)}
            onClose={handleCloseProfil}
          >
            <MenuItem onClick={handleCloseProfil}>
              <NavLink
                className="headerButtonMobile"
                to={`/profil/${username}`}
              >
                Mon Profil
                </NavLink>
            </MenuItem>
            <MenuItem onClick={handleCloseProfil}>
              <NavLink
                className="headerButtonMobile"
                to={`/profil/${username}/mes-parametres`}
              >
                Paramètres
                </NavLink>
            </MenuItem>
            <MenuItem onClick={handleCloseProfil}>
              <button
                type="button"
                className="headerButtonMobileDeco"
                onClick={handleLogout}
              >Déconnexion
                </button>
            </MenuItem>
          </Menu>
        </div>
      )}
      {!isLogged && (
        <div className="headerInscriptionConnexionMobile">
          <AccountCircleIcon style={{ fontSize: 60 }} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClickProfil} />
          <Menu
            id="simple-menu"
            anchorEl={anchorE2}
            keepMounted
            open={Boolean(anchorE2)}
            onClose={handleCloseProfil}
          >
            <MenuItem onClick={handleCloseProfil}>
              <NavLink
                className="headerButtoninscription"
                to="/inscription"
              >
                S'inscrire
            </NavLink>
            </MenuItem>
            <MenuItem onClick={handleCloseProfil}>
              <NavLink
                className="headerButtonMobile"
                to="/connexion"
                activeClassName="headerButtonMobile-active"
              >
                Connexion
            </NavLink>
            </MenuItem>
          </Menu>
        </div>
      )}
    </div>
  );
};

export default HeaderMobile;
