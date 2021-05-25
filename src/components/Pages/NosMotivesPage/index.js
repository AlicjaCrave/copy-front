import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

// == Import
import './nosmotivespage.scss';


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
const NosMotivesPages = ({ motivated }) => (
  <div>
    <Desktop>
      <div>
        <div className="nosMotivesPage">
          <div className="banner-content">
            <div className="blocPage-background">
              <h1 className="banner-title">Nos Motivé(e)s</h1>
              <p className="banner-description">« On ne motive pas les mouches avec du vinaigre ! »
                </p>
              <span className="citationquote">de Didier Hallépée</span>
            </div>
          </div>
          <div className="nosMotivesBloc">
            {/*   <div className="motivationDescriptionColor">
                <div className="dotAndDescription">
                  <div className="smoking">
                    <p className="motivationDescription">J’arrête de fumer</p>
                  </div>
                </div>
                <div className="dotAndDescription">
                  <div className="vegan">
                    <p className="motivationDescription">Je deviens vegan</p>
                  </div>
                </div>
                <div className="dotAndDescription">
                  <div className="walking">
                    <p className="motivationDescription">Je marche plus</p>
                  </div>
                </div>
                <div className="dotAndDescription">
                  <div className="read">
                    <p className="motivationDescription">Se remettre à lire</p>
                  </div>
                </div>
              </div> */}
            <div className="nosMotives">
              {motivated.map((motive) => (
                <div key={motive.id} className="cardNosMotives">
                  <img className="logoNosMotives" alt="" src={motive[1].avatar} />
                  {/* <div className="dotMotivation">
                      <div className={motive.active_motivation01} />
                      <div className={motive.active_motivation02} />
                    </div> */}
                  <p className="pseudoNosMotives">{motive[1].nickname}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  </Desktop>
  <BigTablet>
      <div>
        <div className="nosMotivesPage">
          <div className="banner-content">
            <div className="blocPage-background">
              <h1 className="banner-title">Nos Motivé(e)s</h1>
              <p className="banner-description">« On ne motive pas les mouches avec du vinaigre ! »
                </p>
              <span className="citationquote">de Didier Hallépée</span>
            </div>
          </div>
          <div className="nosMotivesBloc">
            <div className="nosMotives">
              {motivated.map((motive) => (
                <div key={motive.id} className="cardNosMotives">
                  <img className="logoNosMotives" alt="" src={motive[1].avatar} />
                  <p className="pseudoNosMotives">{motive[1].nickname}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  </BigTablet>
  <Tablet>
      <div>
        <div className="nosMotivesPage">
          <div className="banner-content">
            <div className="blocPage-background">
              <h1 className="banner-title">Nos Motivé(e)s</h1>
              <p className="banner-description">« On ne motive pas les mouches avec du vinaigre ! »
                </p>
              <span className="citationquote">de Didier Hallépée</span>
            </div>
          </div>
          <div className="nosMotivesBloc">
            <div className="nosMotives">
              {motivated.map((motive) => (
                <div key={motive.id} className="cardNosMotives">
                  <img className="logoNosMotives" alt="" src={motive[1].avatar} />
                  <p className="pseudoNosMotives">{motive[1].nickname}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  </Tablet>
  <Mobile>
      <div>
        <div className="nosMotivesPage">
          <div className="banner-contentMobile">
            <div className="blocPage-backgroundMobile">
              <h1 className="banner-titleMobile">Nos Motivé(e)s</h1>
              <p className="banner-descriptionMobile">« On ne motive pas les mouches avec du vinaigre ! »
                </p>
              <span className="citationquoteMobile">de Didier Hallépée</span>
            </div>
          </div>
          <div className="nosMotivesBloc">
            <div className="nosMotives">
              {motivated.map((motive) => (
                <div key={motive.id} className="cardNosMotives">
                  <img className="logoNosMotives" alt="" src={motive[1].avatar} />
                  <p className="pseudoNosMotives">{motive[1].nickname}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
  </Mobile>
</div>
);

// == Export
export default NosMotivesPages;
