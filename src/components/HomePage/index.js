// == Import npm
import React from 'react';

import Banner from './Banner';
import Resolutions from './Resolutions';
import Intro from './Intro';
import Testimonies from './Testimonies';
// == Import
import './homepage.scss';

// == Composant
const HomePage = ({ testimonies }) => (
  <div className="home">
    <Banner />
    <Resolutions />
    <Intro />
    <Testimonies testimonies={testimonies} />
  </div>
);

// == Export
export default HomePage;
