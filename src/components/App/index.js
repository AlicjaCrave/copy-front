// == Import npm
import React, { useEffect } from 'react';
// librairie pour faciliter les appels AJAX

// == Import
import './styles.scss';

import Pages from '../../containers/Pages';

// == Composant
const App = ({ loadPostsEffect, fetchTestimoniesEffect, loadMotivatedEffect, loadTestimoniesHomepageEffect }) => {
  // lancer automatiquement une requete vers l'api apres le premier affichage
  useEffect(() => {
    loadPostsEffect();
    fetchTestimoniesEffect();
    loadMotivatedEffect();
    loadTestimoniesHomepageEffect();
  }, []);

  return (
    <div className="app">
      <Pages />
    </div>
  );
};

// == Export
export default App;
