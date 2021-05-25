import { connect } from 'react-redux';

import NosMotivesPages from '../../components/Pages/NosMotivesPage';

const mapStateToProps = (state) => ({
  // élément à récup dans le state
  motivated: state.motivated.motivatedList,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(NosMotivesPages);
