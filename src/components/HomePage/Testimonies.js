// == Import npm
import React from 'react';
import SimpleRating from '../Rating';
import { NavLink } from 'react-router-dom';
import quote from '../../assets/image/quoteomotive.png';

import DOMPurify from 'dompurify';

// == Composant

function createMarkeup(htmlContent) {
  return {
    __html: DOMPurify.sanitize(htmlContent),
  };
}

const Testimonies = ({ testimonies }) => (
  <div className="last3testimoniesBloc">
    <img className="quote" src={quote} alt="" />
    <span className="last3-title">Nos trois derniers témoignages</span>
    <div className="testimonies">
      {testimonies.map((testimony) => (
        <div key={testimony.id} className="cardTestimonie">
          <img className="logoTestimonie" alt="" src={testimony.avatar_author} />
          <SimpleRating rate={testimony.grade} pseudo={testimony.author_name} />
          <p className="content-testimony-user" dangerouslySetInnerHTML={createMarkeup(testimony.content)} />
        </div>
      ))}
    </div>
    <div className="testimonieButtonLigne">
      <NavLink
        to="/temoignages"
        className="testimonieButton"
      >
        Voir plus
      </NavLink>
    </div>
  </div>
);

// == Export
export default Testimonies;
