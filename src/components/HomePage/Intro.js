// == Import npm
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Resolution1 from 'src/assets/image/resolution1.jpg';
import stones from '../../assets/image/stones.jpg';

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
const Intro = () => (
  <div>
    <Desktop>
      <div className="intro-contentDesktop">
        <div className="intro-content2Desktop">
          <h2 className="intro-titreDesktop">Introduction</h2>

          <p className="intro-pDesktop"><img
            className="intro-image1Desktop"
            src={stones}
            alt="intro-image1"
          /> À l’occasion du passage à la nouvelle année, il est coutume
          de prendre de bonnes résolutions, un engagement envers soi-même pour renoncer
          ou améliorer ses habitudes, changer son comportement pour un <strong>meilleur mode de vie </strong>
          durant l’année à venir.

          En 2007, une étude menée par <strong>Richard Wiseman</strong>, impliquant 3 000 personnes,
          a démontré que 88 % des résolutions de la nouvelle année finissaient par échouer.
          Concernant le taux de succès, il a été observé que celui-ci tend à s’améliorer
          lorsque les résolutions sont partagées, boosté par un objectif commun.
          Parmi les personnes qui prennent des résolutions le 31 décembre,
          30% ne tiennent pas plus d'une semaine. Le cap du premier mois étant infranchissable pour 45% des gens. (sources <a className="lien-introDesktop" href="https://fr.wikipedia.org/wiki/Bonnes_r%C3%A9solutions#:~:text=Les%20bonnes%20r%C3%A9solutions%20sont%20une,durant%20l'ann%C3%A9e%20%C3%A0%20venir.">wikipedia</a>, <a className="lien-introDesktop" href="https://www.cosmopolitan.fr/janvier-mois-de-l-introspection-et-pas-des-resolutions,2015182.asp">cosmopolitan</a>)
        </p>

          <p className="intro-pDesktop"><img
            className="intro-image2Desktop"
            src="http://ekladata.com/LoOZY1F_xhKTi3GhdrRpYGTPh7A.jpg"
            alt="intro-image2"
          />C’est pour cela que nous avons conçu <strong>O’Motive</strong>,
          pour ceux qui souhaiteraient rejoindre une communauté positive et
          bienveillante, tous reliés par un seul et même objectif :
          <strong>l’accomplissement de soi.</strong>

          Nous mettons l’accent sur un aspect ludique, en orientant l’utilisateur
          vers un système de jeu, afin de garder l’utilisateur confiant et motivé,
          l’accompagnant pour <strong>une durée de 30 jours</strong>.
        </p>
        </div>
      </div>
    </Desktop>
    <BigTablet>
      <div className="intro-contentDesktop">
        <div className="intro-content2Desktop">
          <h2 className="intro-titreDesktop">Introduction</h2>

          <p className="intro-pDesktop"><img
            className="intro-image1Desktop"
            src={stones}
            alt="intro-image1"
          /> À l’occasion du passage à la nouvelle année, il est coutume
          de prendre de bonnes résolutions, un engagement envers soi-même pour renoncer
          ou améliorer ses habitudes, changer son comportement pour un <strong>meilleur mode de vie </strong>
          durant l’année à venir.

          En 2007, une étude menée par <strong>Richard Wiseman</strong>, impliquant 3 000 personnes,
          a démontré que 88 % des résolutions de la nouvelle année finissaient par échouer.
          Concernant le taux de succès, il a été observé que celui-ci tend à s’améliorer
          lorsque les résolutions sont partagées, boosté par un objectif commun.
          Parmi les personnes qui prennent des résolutions le 31 décembre,
          30% ne tiennent pas plus d'une semaine. Le cap du premier mois étant infranchissable pour 45% des gens. (sources <a className="lien-introDesktop" href="https://fr.wikipedia.org/wiki/Bonnes_r%C3%A9solutions#:~:text=Les%20bonnes%20r%C3%A9solutions%20sont%20une,durant%20l'ann%C3%A9e%20%C3%A0%20venir.">wikipedia</a>, <a className="lien-introDesktop" href="https://www.cosmopolitan.fr/janvier-mois-de-l-introspection-et-pas-des-resolutions,2015182.asp">cosmopolitan</a>)
        </p>

          <p className="intro-pDesktop"><img
            className="intro-image2Desktop"
            src="http://ekladata.com/LoOZY1F_xhKTi3GhdrRpYGTPh7A.jpg"
            alt="intro-image2"
          />C’est pour cela que nous avons conçu <strong>O’Motive</strong>,
          pour ceux qui souhaiteraient rejoindre une communauté positive et
          bienveillante, tous reliés par un seul et même objectif :
          <strong>l’accomplissement de soi.</strong>

          Nous mettons l’accent sur un aspect ludique, en orientant l’utilisateur
          vers un système de jeu, afin de garder l’utilisateur confiant et motivé,
          l’accompagnant pour <strong>une durée de 30 jours</strong>.
        </p>
        </div>
      </div>
    </BigTablet>
    <Tablet>
      <div className="intro-contentDesktop">
        <div className="intro-content2Desktop">
          <h2 className="intro-titreDesktop">Introduction</h2>

          <p className="intro-pDesktop"><img
            className="intro-image1Desktop"
            src={stones}
            alt="intro-image1"
          /> À l’occasion du passage à la nouvelle année, il est coutume
          de prendre de bonnes résolutions, un engagement envers soi-même pour renoncer
          ou améliorer ses habitudes, changer son comportement pour un <strong>meilleur mode de vie </strong>
          durant l’année à venir.

          En 2007, une étude menée par <strong>Richard Wiseman</strong>, impliquant 3 000 personnes,
          a démontré que 88 % des résolutions de la nouvelle année finissaient par échouer.
          Concernant le taux de succès, il a été observé que celui-ci tend à s’améliorer
          lorsque les résolutions sont partagées, boosté par un objectif commun.
          Parmi les personnes qui prennent des résolutions le 31 décembre,
          30% ne tiennent pas plus d'une semaine. Le cap du premier mois étant infranchissable pour 45% des gens. (sources <a className="lien-introDesktop" href="https://fr.wikipedia.org/wiki/Bonnes_r%C3%A9solutions#:~:text=Les%20bonnes%20r%C3%A9solutions%20sont%20une,durant%20l'ann%C3%A9e%20%C3%A0%20venir.">wikipedia</a>, <a className="lien-introDesktop" href="https://www.cosmopolitan.fr/janvier-mois-de-l-introspection-et-pas-des-resolutions,2015182.asp">cosmopolitan</a>)
        </p>

          <p className="intro-pDesktop"><img
            className="intro-image2Desktop"
            src="http://ekladata.com/LoOZY1F_xhKTi3GhdrRpYGTPh7A.jpg"
            alt="intro-image2"
          />C’est pour cela que nous avons conçu <strong>O’Motive</strong>,
          pour ceux qui souhaiteraient rejoindre une communauté positive et
          bienveillante, tous reliés par un seul et même objectif :
          <strong>l’accomplissement de soi.</strong>

          Nous mettons l’accent sur un aspect ludique, en orientant l’utilisateur
          vers un système de jeu, afin de garder l’utilisateur confiant et motivé,
          l’accompagnant pour <strong>une durée de 30 jours</strong>.
        </p>
        </div>
      </div>
    </Tablet>
    <Mobile>
      <div className="intro-contentMobile">
        <div className="intro-content2Mobile">
          <h2 className="intro-titreMobile">Introduction</h2>

          <p className="intro-p"><img
            className="intro-image1"
            src={stones}
            alt="intro-image1"
          /> À l’occasion du passage à la nouvelle année, il est coutume
          de prendre de bonnes résolutions, un engagement envers soi-même pour renoncer
          ou améliorer ses habitudes, changer son comportement pour un <strong>meilleur mode de vie </strong>
          durant l’année à venir.

          En 2007, une étude menée par <strong>Richard Wiseman</strong>, impliquant 3 000 personnes,
          a démontré que 88 % des résolutions de la nouvelle année finissaient par échouer.
          Concernant le taux de succès, il a été observé que celui-ci tend à s’améliorer
          lorsque les résolutions sont partagées, boosté par un objectif commun.
          Parmi les personnes qui prennent des résolutions le 31 décembre,
          30% ne tiennent pas plus d'une semaine. Le cap du premier mois étant infranchissable pour 45% des gens. (sources <a className="lien-intro" href="https://fr.wikipedia.org/wiki/Bonnes_r%C3%A9solutions#:~:text=Les%20bonnes%20r%C3%A9solutions%20sont%20une,durant%20l'ann%C3%A9e%20%C3%A0%20venir.">wikipedia</a>, <a className="lien-intro" href="https://www.cosmopolitan.fr/janvier-mois-de-l-introspection-et-pas-des-resolutions,2015182.asp">cosmopolitan</a>)
        </p>

          <p className="intro-p"><img
            className="intro-image2"
            src="http://ekladata.com/LoOZY1F_xhKTi3GhdrRpYGTPh7A.jpg"
            alt="intro-image2"
          />C’est pour cela que nous avons conçu <strong>O’Motive</strong>,
          pour ceux qui souhaiteraient rejoindre une communauté positive et
          bienveillante, tous reliés par un seul et même objectif :
          <strong>l’accomplissement de soi.</strong>

          Nous mettons l’accent sur un aspect ludique, en orientant l’utilisateur
          vers un système de jeu, afin de garder l’utilisateur confiant et motivé,
          l’accompagnant pour <strong>une durée de 30 jours</strong>.
        </p>
        </div>
      </div>
    </Mobile>
  </div>
);

// == Export
export default Intro;
