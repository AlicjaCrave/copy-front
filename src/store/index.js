import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

import authMiddlewares from '../middlewares/authMiddlewares';
import inscriptionMiddlewares from '../middlewares/inscriptionMiddlewares';
import motivatedMiddlewares from '../middlewares/motivatedMiddlewares';
import postsMiddlewares from '../middlewares/postsMiddlewares';
import testimoniesMiddlewares from '../middlewares/testimoniesMiddlewares';
import profilUserConnectedMiddlewares from '../middlewares/profilUserConnectedMiddlewares';
import resolutionsConnectedMiddlewares from '../middlewares/resolutionsConnectedMiddlewares';
import addResolutionMiddlewares from '../middlewares/addResolutionMiddlewares';

import persistRootReducer from '../reducers';

const enhancers = composeWithDevTools(
  applyMiddleware(
    postsMiddlewares,
    testimoniesMiddlewares,
    authMiddlewares,
    inscriptionMiddlewares,
    motivatedMiddlewares,
    profilUserConnectedMiddlewares,
    resolutionsConnectedMiddlewares,
    addResolutionMiddlewares,
  ),
);

const store = createStore(
  // reducer
  persistRootReducer,
  // enhancer
  enhancers,
);

const persistor = persistStore(store);

export { store, persistor };
