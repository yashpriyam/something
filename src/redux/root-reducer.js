import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';  //use 'storage' for using local storage

import userReducer from './user/user.reducer';
import candidatesReducer from './candidates/candidates.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: []
}

const rootReducer = combineReducers({
  user: userReducer,
  candidates: candidatesReducer
});

export default persistReducer(persistConfig, rootReducer);