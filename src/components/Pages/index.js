import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Blog from '../../containers/BlogPage';
import NosMotivesPage from '../../containers/NosMotivesPage';
import TestimoniePage from '../../containers/TestimoniesPage';
import InscriptionPage from '../../containers/InscriptionPage';
import ConnexionPage from '../../containers/ConnexionPage';
import ProfilUser from '../../containers/ProfilUser';
import HomePage from '../../containers/HomePage';
import Article from './Blog/article';
import ParamUser from '../../containers/PagesUsers/ParamUser';
import Header from '../../containers/Header';
import Footer from '../Footer';
import Error404 from './Error404';
import AboutUs from './AboutUs';
import Archives from '../../containers/PageArchivedUser';

const Pages = ({
  posts,
  testimonies,
  isLogged,
  username,
  motivated,
  testimoniesHomePage,
  profilUser,
  archived,
}) => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/">
        <HomePage testimonies={testimoniesHomePage} />
      </Route>
      <Route exact path={`/profil/${username}`}>
        {!isLogged ? <Redirect to="/connexion" /> : <ProfilUser />}
      </Route>
      <Route path="/blog">
        <Blog />
      </Route>
      <Route path="/nos-motives">
        <NosMotivesPage motivated={motivated} />
      </Route>
      <Route path="/temoignages">
        <TestimoniePage testimonies={testimonies} />
      </Route>
      <Route path="/inscription">
        <InscriptionPage />
      </Route>
      <Route path="/a-propos">
        <AboutUs />
      </Route>
      <Route exact path="/connexion">
        {isLogged ? <Redirect to={`/profil/${username}`} /> : <ConnexionPage />}
      </Route>
      <Route path="/connexion">
        <ConnexionPage />
      </Route>
      {posts.map((article) => (
        <Route key={article.id} path={`/article/${article.slug}`}>
          <Article
            picture={article._embedded['wp:featuredmedia'][0].source_url}
            title={article.title.rendered}
            content={article.content.rendered}
          />
        </Route>
      ))}
      <Route path={`/profil/${username}/mes-parametres`}>
        {!isLogged ? <Redirect to="/connexion" /> : <ParamUser />}
      </Route>
      <Route path={`/profil/${username}/mes-archives`}>
        {!isLogged ? <Redirect to="/connexion" /> : <Archives profilUser={profilUser} archived={archived} />}
      </Route>
      <Route path="*">
        <Error404 />
      </Route>
    </Switch>
    <Footer />
  </div>
);
export default Pages;
