import { connect } from 'react-redux';

import ArticlesPage from '../../components/Pages/Blog';

const mapStateToProps = (state) => ({
  // élément à récup dans le state
  id: state.articles.id,
  title: state.articles.title,
  excerpt: state.articles.excerpt,
  source_url: state.articles.source_url,
  slug: state.articles.slug,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, null)(ArticlesPage);
