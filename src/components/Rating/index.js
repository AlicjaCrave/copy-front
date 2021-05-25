import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function createMarkeup(htmlContent) {
  return {
    __html: DOMPurify.sanitize(htmlContent),
  };
}

const SimpleRating = ({ rate, pseudo }) => (
  <div>
    <Box component="fieldset" mb={3} borderColor="transparent">
      <Typography component="legend" className="pseudoTestimonie" dangerouslySetInnerHTML={createMarkeup(pseudo)} />
      <Rating
        name="read-only"
        value={rate}
        readOnly
      />
    </Box>
  </div>
);

SimpleRating.propTypes = {
  rate: PropTypes.number.isRequired,
  pseudo: PropTypes.string.isRequired,
};

export default SimpleRating;
