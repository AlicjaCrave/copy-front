import { connect } from 'react-redux';

import PageArchivedUser from '../../components/PagesUsers/PageArchivesUser';

const mapStateToProps = (state) => ({
  // élément à récup dans le state
  archived: state.resolutionsConnected.archived,
  username: state.auth.username,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(PageArchivedUser);
