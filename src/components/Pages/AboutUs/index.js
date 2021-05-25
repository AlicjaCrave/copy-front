import React from 'react';

// == Import
import './aboutus.scss';

import snicker from 'src/assets/image/snickerstransparent.png';
import nounours from 'src/assets/image/nonourstransparent.png';
import echarpe from 'src/assets/image/echarpefondtransparent.png';
import glasses from 'src/assets/image/glassestransparent.png';

// == Composant
const AboutUs = () => (
  <div className="aboutus">
    <div className="aboutus-content">
      <div className="aboutus-background">
        <h1 className="titlePage">&Agrave; propos de nous</h1>
        <p className="aboutus-description">La team derrière le projet
        </p>
      </div>
    </div>
    <div className="team-content">
      <div className="teamgroup">
        <h3 className="teamtitle">Team Front</h3>
        <div className="deuxteam">
          <div className="cardTestimonie">
            <img className="logoTestimonie" alt="" src={snicker} />
            <p className="nameteam">Jérémie</p>
            <span>Git Master</span>
          </div>
          <div className="cardTestimonie">
            <img className="logoTestimonie" alt="" src={nounours} />
            <p className="nameteam">Christal </p>
            <span>Lead Dev Front</span>
          </div>
        </div>
      </div>
      <div className="teamgroup">
        <h3 className="teamtitle">Team Back</h3>
        <div className="deuxteam">
          <div className="cardTestimonie">
            <img className="logoTestimonie" alt="" src={echarpe} />
            <p className="nameteam">Alicja </p>
            <span>Product Owner</span>
          </div>
          <div className="cardTestimonie">
            <img className="logoTestimonie" alt="" src={glasses} />
            <p className="nameteam">Victor</p>
            <span>Scrum Master & Lead Dev Back</span>
          </div>
        </div>
      </div>
    </div>
  </div>

);

export default AboutUs;
