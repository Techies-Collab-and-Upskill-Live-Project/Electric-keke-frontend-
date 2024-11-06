import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    newNotification(state, action) {
      const notification = action.payload;
      return notification;
    },
  },
});

export const { newNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
