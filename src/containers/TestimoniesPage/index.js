import { connect } from 'react-redux';

import testimoniesPage from '../../components/Pages/TestimoniePage';

const mapStateToProps = (state) => ({
  // élément à récup dans le state
  testimonies: state.testimonies.testimoniesList,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(testimoniesPage);
