// == Import npm
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Carousel from 'react-bootstrap/Carousel';
import vegan from 'src/assets/image/vegancarousel.png';
import walker from 'src/assets/image/walkercarousel.png';
import cook from 'src/assets/image/cookcarousel.png';
import reading from 'src/assets/image/readingcarousel.png';
import nosmoking from 'src/assets/image/smokingcarousel.png';

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
const Resolutions = () => (
  <div>
    <Desktop>
      <div className="carousel-content">
        <div className="carousel-content2">
          <Carousel>
            <Carousel.Item interval={4000}>
              <img
                className="d-block w-100"
                src={vegan}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="titreresolution">Je deviens Vegan.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <img
                className="d-block w-100"
                src={walker}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3 className="titreresolution">Je marche plus.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <img
                className="d-block w-100"
                src={reading}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3 className="titreresolution">Je lis quotidiennement.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <img
                className="d-block w-100"
                src={cook}
                alt="Fourth slide"
              />
              <Carousel.Caption>
                <h3 className="titreresolution">Je mange moins de fast food.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <img
                className="d-block w-100"
                src={nosmoking}
                alt="Fifth slide"
              />
              <Carousel.Caption>
                <h3 className="titreresolution">J'arrête de fumer.</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </Desktop>
    <BigTablet>
      <div className="carousel-content">
        <div className="carousel-content2">
          <Carousel>
            <Carousel.Item interval={4000}>
              <img
                className="d-block w-100"
                src={vegan}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="titreresolution">Je deviens Vegan.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <img
                className="d-block w-100"
                src={walker}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3 className="titreresolution">Je marche plus.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <img
                className="d-block w-100"
                src={reading}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3 className="titreresolution">Je lis quotidiennement.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <img
                className="d-block w-100"
                src={cook}
                alt="Fourth slide"
              />
              <Carousel.Caption>
                <h3 className="titreresolution">Je mange moins de fast food.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <img
                className="d-block w-100"
                src={nosmoking}
                alt="Fifth slide"
              />
              <Carousel.Caption>
                <h3 className="titreresolution">J'arrête de fumer.</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </BigTablet>
    <Tablet>
      <div className="carousel-content">
        <div className="carousel-content2">
          <Carousel>
            <Carousel.Item interval={4000}>
              <img
                className="d-block w-100"
                src={vegan}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="titreresolution">Je deviens Vegan.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <img
                className="d-block w-100"
                src={walker}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3 className="titreresolution">Je marche plus.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <img
                className="d-block w-100"
                src={reading}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3 className="titreresolution">Je lis quotidiennement.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <img
                className="d-block w-100"
                src={cook}
                alt="Fourth slide"
              />
              <Carousel.Caption>
                <h3 className="titreresolution">Je mange moins de fast food.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <img
                className="d-block w-100"
                src={nosmoking}
                alt="Fifth slide"
              />
              <Carousel.Caption>
                <h3 className="titreresolution">J'arrête de fumer.</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </Tablet>
    <Mobile>
      <div className="carousel-contentMobile">
        <div className="carousel-content2Mobile">
          <Carousel>
            <Carousel.Item interval={4000}>
              <img
                className="d-block w-100"
                src={vegan}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 className="titreresolutionMobile">Je deviens Vegan.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <img
                className="d-block w-100"
                src={walker}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3 className="titreresolutionMobile">Je marche plus.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <img
                className="d-block w-100"
                src={reading}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3 className="titreresolutionMobile">Je lis quotidiennement.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <img
                className="d-block w-100"
                src={cook}
                alt="Fourth slide"
              />
              <Carousel.Caption>
                <h3 className="titreresolutionMobile">Je mange moins de fast food.</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <img
                className="d-block w-100"
                src={nosmoking}
                alt="Fifth slide"
              />
              <Carousel.Caption>
                <h3 className="titreresolutionMobile">J'arrête de fumer.</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </Mobile>
  </div>
);

// == Export
export default Resolutions;
