import { configureStore } from '@reduxjs/toolkit';
import  channelReducer  from '../features/channelSlice';
import userReducer from '../features/userSlice';

export default configureStore({
  reducer: {
    user: userReducer,
    channel : channelReducer
  },
});
