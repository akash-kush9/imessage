import { createSlice } from '@reduxjs/toolkit';

export const channelSlice = createSlice({
  name: 'channel',
  initialState: {
        channelId  : null,
        channelName : null
  },
  reducers: {
    setChannel: (state,action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName
    },
  },
});

export const { setChannel } = channelSlice.actions;

export const selectChannel = state => ({
            channelId:state.channel.channelId,
            channelName :state.channel.channelName
    });

export default channelSlice.reducer;