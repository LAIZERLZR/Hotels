import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hotels: [],
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    addAndRemoveHotel(state, action) {
      const findHotel = state.hotels.findIndex((obj) => obj.hotelId === action.payload.hotelId);
      if (findHotel !== -1) {
        state.hotels = state.hotels.filter((obj, index) => index !== findHotel);
      } else {
        state.hotels.push({ ...action.payload });
      }
    },
  },
});

export const { addAndRemoveHotel } = favoriteSlice.actions;
export default favoriteSlice.reducer;
