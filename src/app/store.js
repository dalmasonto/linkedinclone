import { configureStore } from '@reduxjs/toolkit';
import { userSlice } from '../features/counter/UserSlice';

export default configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
