import { configureStore } from '@reduxjs/toolkit';
import authentificationReducer from './features/authentification/authSlice';

export default configureStore({
  reducer: {
    isAuthorized: authentificationReducer,
  },
});
