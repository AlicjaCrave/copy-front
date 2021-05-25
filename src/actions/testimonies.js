export const FETCH_TESTIMONIES = 'FETCH_TESTIMONIES';
export const SET_TESTIMONIES = 'SET_TESTIMONIES';
export const LOAD_TESTIMONIES_HOMEPAGE = 'LOAD_TESTIMONIES_HOMEPAGE';
export const SET_TESTIMONIES_HOMEPAGE = 'SET_TESTIMONIES_HOMEPAGE';

export const fetchTestimonies = () => ({
  type: FETCH_TESTIMONIES,
});

export const setTestimonies = (testimoniesArray) => ({
  type: SET_TESTIMONIES,
  testimoniesArray,
});

export const loadTestimoniesHomepage = () => ({
  type: LOAD_TESTIMONIES_HOMEPAGE,
});

export const setTestimoniesHomepage = (testimoniesHomepageArray) => ({
  type: SET_TESTIMONIES_HOMEPAGE,
  testimoniesHomepageArray,
});
