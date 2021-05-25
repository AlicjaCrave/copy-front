/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import { useMediaQuery } from 'react-responsive';


import SimpleRating from '../../Rating';

// == Import
import './testimoniespage.scss';

function createMarkeup(htmlContent) {
  return {
    __html: DOMPurify.sanitize(htmlContent),
  };
}

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
const TestimoniePage = ({ testimonies }) => (
  <div>
    <Desktop>
    <div>
      <div className="testimonies-content">
        <div className="testimonies-background">
          <h1 className="testimonies-title">Témoignages</h1>
          <div>
            <p className="testimonies-subtitle">« L’échec est l'épice qui donne sa saveur au succès. »
            </p>
            <span className="citationquote">de Truman Capote</span>
          </div>
        </div>
      </div>
      <div className="testimoniesBloc">
        <div className="testimonies-content">
          {testimonies.map((testimony) => (
            <div key={testimony.id} className="cardTestimonie">
              <img className="logoTestimonie" alt="" src={testimony.avatar_author} />
              <SimpleRating rate={testimony.grade} pseudo={testimony.author_name} />
              <p className="content-testimony-user" dangerouslySetInnerHTML={createMarkeup(testimony.content)} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </Desktop>
    <BigTablet>
    <div>
      <div className="testimonies-content">
        <div className="testimonies-background">
          <h1 className="testimonies-title">Témoignages</h1>
          <div>
            <p className="testimonies-subtitle">« L’échec est l'épice qui donne sa saveur au succès. »
            </p>
            <span className="citationquote">de Truman Capote</span>
          </div>
        </div>
      </div>
      <div className="testimoniesBloc">
        <div className="testimonies-content">
          {testimonies.map((testimony) => (
            <div key={testimony.id} className="cardTestimonie">
              <img className="logoTestimonie" alt="" src={testimony.avatar_author} />
              <SimpleRating rate={testimony.grade} pseudo={testimony.author_name} />
              <p className="content-testimony-user" dangerouslySetInnerHTML={createMarkeup(testimony.content)} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </BigTablet>
    <Tablet>
    <div>
      <div className="testimonies-content">
        <div className="testimonies-background">
          <h1 className="testimonies-title">Témoignages</h1>
          <div>
            <p className="testimonies-subtitle">« L’échec est l'épice qui donne sa saveur au succès. »
            </p>
            <span className="citationquote">de Truman Capote</span>
          </div>
        </div>
      </div>
      <div className="testimoniesBloc">
        <div className="testimonies-content">
          {testimonies.map((testimony) => (
            <div key={testimony.id} className="cardTestimonie">
              <img className="logoTestimonie" alt="" src={testimony.avatar_author} />
              <SimpleRating rate={testimony.grade} pseudo={testimony.author_name} />
              <p className="content-testimony-user" dangerouslySetInnerHTML={createMarkeup(testimony.content)} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </Tablet>
    <Mobile>
    <div>
      <div className="testimonies-contentMobile">
        <div className="testimonies-backgroundMobile">
          <h1 className="testimonies-titleMobile">Témoignages</h1>
          <div>
            <p className="testimonies-subtitleMobile">« L’échec est l'épice qui donne sa saveur au succès. »
            </p>
            <span className="citationquoteMobile">de Truman Capote</span>
          </div>
        </div>
      </div>
      <div className="testimoniesBloc">
        <div className="testimonies-content">
          {testimonies.map((testimony) => (
            <div key={testimony.id} className="cardTestimonie">
              <img className="logoTestimonie" alt="" src={testimony.avatar_author} />
              <SimpleRating rate={testimony.grade} pseudo={testimony.author_name} />
              <p className="content-testimony-user" dangerouslySetInnerHTML={createMarkeup(testimony.content)} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </Mobile>
  </div>
);

TestimoniePage.propTypes = {
  testimonies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      pseudo: PropTypes.string.isRequired,
      avatar_author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      grade: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
// == Export
export default TestimoniePage;
