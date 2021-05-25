/* eslint-disable react/no-danger */
import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useMediaQuery } from 'react-responsive';

import DOMPurify from 'dompurify';

// == Import
import './blog.scss';

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
const Blog = ({ posts }) => (
  <div>
    <Desktop>
      <div>
        <div className="blogPage">
          <div className="blocPage-content">
            <div className="blocPage-background">
              <h1 className="titlePage">Le Blog</h1>
              <p className="blocPage-description">« Soit A un succès dans la vie. Alors A = x + y + z, où x = travailler, y = s'amuser, z = se taire. »
              </p>
              <span className="citationquote">de Albert Einstein</span>
            </div>
          </div>
          <div className="articlesBloc">
            {posts.map((article) => (
              <div key={article.id} className="articleCard">
                <img className="imgArticleCard" src={article._embedded['wp:featuredmedia'][0].source_url} alt="" />
                <h2 className="subtitleCard" dangerouslySetInnerHTML={createMarkeup(article.title.rendered)} />
                <p className="articleText" dangerouslySetInnerHTML={createMarkeup(article.excerpt.rendered)} />
                <div className="testimonieButtonLigne">
                  <NavLink className="blogButton" to={`/article/${article.slug}`}>Voir plus...</NavLink>
                </div>
              </div>
            ))}
          </div>
          <NavLink
            to="/"
            className="retourHomepageBlog"
          >
            Retour à la page d'accueil
          </NavLink>
        </div>
      </div>
      </Desktop>
      <BigTablet>
      <div>
        <div className="blogPage">
          <div className="blocPage-content">
            <div className="blocPage-background">
              <h1 className="titlePage">Le Blog</h1>
              <p className="blocPage-description">« Soit A un succès dans la vie. Alors A = x + y + z, où x = travailler, y = s'amuser, z = se taire. »
              </p>
              <span className="citationquote">de Albert Einstein</span>
            </div>
          </div>
          <div className="articlesBloc">
            {posts.map((article) => (
              <div key={article.id} className="articleCard">
                <img className="imgArticleCard" src={article._embedded['wp:featuredmedia'][0].source_url} alt="" />
                <h2 className="subtitleCard" dangerouslySetInnerHTML={createMarkeup(article.title.rendered)} />
                <p className="articleText" dangerouslySetInnerHTML={createMarkeup(article.excerpt.rendered)} />
                <div className="testimonieButtonLigne">
                  <NavLink className="blogButton" to={`/article/${article.slug}`}>Voir plus...</NavLink>
                </div>
              </div>
            ))}
          </div>
          <NavLink
            to="/"
            className="retourHomepageBlog"
          >
            Retour à la page d'accueil
          </NavLink>
        </div>
      </div>
      </BigTablet>
      <Tablet>
      <div>
        <div className="blogPage">
          <div className="blocPage-content">
            <div className="blocPage-background">
              <h1 className="titlePage">Le Blog</h1>
              <p className="blocPage-description">« Soit A un succès dans la vie. Alors A = x + y + z, où x = travailler, y = s'amuser, z = se taire. »
              </p>
              <span className="citationquote">de Albert Einstein</span>
            </div>
          </div>
          <div className="articlesBloc">
            {posts.map((article) => (
              <div key={article.id} className="articleCard">
                <img className="imgArticleCard" src={article._embedded['wp:featuredmedia'][0].source_url} alt="" />
                <h2 className="subtitleCard" dangerouslySetInnerHTML={createMarkeup(article.title.rendered)} />
                <p className="articleText" dangerouslySetInnerHTML={createMarkeup(article.excerpt.rendered)} />
                <div className="testimonieButtonLigne">
                  <NavLink className="blogButton" to={`/article/${article.slug}`}>Voir plus...</NavLink>
                </div>
              </div>
            ))}
          </div>
          <NavLink
            to="/"
            className="retourHomepageBlog"
          >
            Retour à la page d'accueil
          </NavLink>
        </div>
      </div>
      </Tablet>
      <Mobile>
      <div>
        <div className="blogPage">
          <div className="blocPage-contentMobile">
            <div className="blocPage-backgroundMobile">
              <h1 className="titlePage">Le Blog</h1>
              <p className="blocPage-descriptionMobile">« Soit A un succès dans la vie. Alors A = x + y + z, où x = travailler, y = s'amuser, z = se taire. »
              </p>
              <span className="citationquoteMobile">de Albert Einstein</span>
            </div>
          </div>
          <div className="articlesBloc">
            {posts.map((article) => (
              <div key={article.id} className="articleCard">
                <img className="imgArticleCard" src={article._embedded['wp:featuredmedia'][0].source_url} alt="" />
                <h2 className="subtitleCard" dangerouslySetInnerHTML={createMarkeup(article.title.rendered)} />
                <p className="articleText" dangerouslySetInnerHTML={createMarkeup(article.excerpt.rendered)} />
                <div className="testimonieButtonLigne">
                  <NavLink className="blogButton" to={`/article/${article.slug}`}>Voir plus...</NavLink>
                </div>
              </div>
            ))}
          </div>
          <NavLink
            to="/"
            className="retourHomepageBlog"
          >
            Retour à la page d'accueil
          </NavLink>
        </div>
      </div>
      </Mobile>
  </div>
);

Blog.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // picture: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
// == Export
export default Blog;
