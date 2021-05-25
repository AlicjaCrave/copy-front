// == Import npm
import React from 'react';
import { Route, NavLink, Redirect } from 'react-router-dom';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useMediaQuery } from 'react-responsive';

// == Import
import './header.scss';
import logoPinguin from '../../assets/image/pingouin-logo.png';
import HeaderMobile from '../HeaderMobile/headerMobile';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1368 });
  return isDesktop ? children : null;
};
const BigTablet = ({ children }) => {
  const BigTablet = useMediaQuery({ minWidth: 900, maxWidth: 1367 });
  return BigTablet ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 901 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 300, maxWidth: 767 });
  return isMobile ? children : null;
};

// == Composant
const Header = ({ isLogged, username, handleLogout }) => (
  <div>
    <Desktop>
      <div className="header-content">
        <div className="header-nav">
          <div className="headerLogo">
            <NavLink
              className="headerLogoContent"
              to="/"
              exact
            >
              <img className="logoPinguin" alt="" src={logoPinguin} />
              <span className="headerLogoTitle">O'Motive</span>
            </NavLink>
          </div>
          <div className="headerCentralNav">
            <div className="headerButton_s">
              <NavLink
                className="headerButton"
                to="/nos-motives"
                activeClassName="headerButton-active"
              >
                Nos Motivé(e)s
              </NavLink>
              <NavLink
                className="headerButton"
                to="/blog"
                activeClassName="headerButton-active"
              >
                Blog
              </NavLink>
              <NavLink
                className="headerButton"
                to="/temoignages"
                activeClassName="headerButton-active"
              >
                Temoignages
              </NavLink>
            </div>
          </div>
          {isLogged && (
            <div className="dropdown">
              <button type="button" className="headerDropdownButton">{username}<AccountCircleIcon style={{ fontSize: 40 }} />
              </button>
              <div className="dropdownContent">
                <NavLink
                  className="headerDropdownButtonItem"
                  to={`/profil/${username}`}
                >
                  Mon Profil
                </NavLink>
                <NavLink
                  className="headerDropdownButtonItem"
                  to={`/profil/${username}/mes-parametres`}
                >
                  Paramètres
                </NavLink>
                <button
                  type="button"
                  className="headerDropdownButtonItem"
                  onClick={handleLogout}
                >Déconnexion
                </button>
              </div>
            </div>
          )}
          {!isLogged && (
            <div className="headerInscriptionConnexion">
              <NavLink
                className="btn-grad"
                to="/inscription"
              >
                S'inscrire
              </NavLink>
              <NavLink
                className="headerButton"
                to="/connexion"
                activeClassName="headerButton-active"
              >
                Connexion
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </Desktop>
    <BigTablet>
      <div className="header-content">
        <div className="header-nav">
          <div className="headerLogo">
            <NavLink
              className="headerLogoContent"
              to="/"
              exact
            >
              <img className="logoPinguin" alt="" src={logoPinguin} />
              <span className="headerLogoTitle">O'Motive</span>
            </NavLink>
          </div>
          <div className="headerCentralNav">
            <div className="headerButton_s">
              <NavLink
                className="headerButton"
                to="/nos-motives"
                activeClassName="headerButton-active"
              >
                Nos Motivé(e)s
              </NavLink>
              <NavLink
                className="headerButton"
                to="/blog"
                activeClassName="headerButton-active"
              >
                Blog
              </NavLink>
              <NavLink
                className="headerButton"
                to="/temoignages"
                activeClassName="headerButton-active"
              >
                Temoignages
              </NavLink>
            </div>
          </div>
          {isLogged && (
            <div className="dropdown">
              <button type="button" className="headerDropdownButton">{username}<AccountCircleIcon style={{ fontSize: 40 }} />
              </button>
              <div className="dropdownContent">
                <NavLink
                  className="headerDropdownButtonItem"
                  to={`/profil/${username}`}
                >
                  Mon Profil
                </NavLink>
                <NavLink
                  className="headerDropdownButtonItem"
                  to={`/profil/${username}/mes-parametres`}
                >
                  Paramètres
                </NavLink>
                <button
                  type="button"
                  className="headerDropdownButtonItem"
                  onClick={handleLogout}
                >Déconnexion
                </button>
              </div>
            </div>
          )}
          {!isLogged && (
            <div className="headerInscriptionConnexion">
              <NavLink
                className="btn-grad"
                to="/inscription"
              >
                S'inscrire
              </NavLink>
              <NavLink
                className="headerButton"
                to="/connexion"
                activeClassName="headerButton-active"
              >
                Connexion
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </BigTablet>
    <Tablet>
      <HeaderMobile isLogged={isLogged} username={username} handleLogout={handleLogout} />
    </Tablet>
    <Mobile>
      <HeaderMobile isLogged={isLogged} username={username} handleLogout={handleLogout} />
    </Mobile>
  </div>
);

// == Export
export default Header;
