/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import DOMPurify from 'dompurify';

function createMarkeup(htmlContent) {
  return {
    __html: DOMPurify.sanitize(htmlContent),
  };
}

// == Import
import './blog.scss';

// == Composant
const Article = ({
  title,
  picture,
  content,
}) => (
  <div>

    <div className="articlePage">
      <div className="article">
        <img className="imgArticle" src={picture} alt="" />
        <h2 className="subtitlePage" dangerouslySetInnerHTML={createMarkeup(title)} />
        <p className="articleTextPage" dangerouslySetInnerHTML={createMarkeup(content)} />
        <NavLink
          to="/blog"
          className="retourHomepageBlog"
        >
          Retour
        </NavLink>
      </div>
    </div>

  </div>
);

Article.propTypes = {
  title: PropTypes.string.isRequired,
  //  picture: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

// == Export
export default Article;
