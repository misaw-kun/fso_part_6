import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: '',
  isVisible: false
}

const notifSlice = createSlice({
  name: 'notif',
  initialState,
  reducers: {
    showNotif(state, action) {
      state.message = action.payload
      state.isVisible = true
    },
    hideNotif(state) {
      state.isVisible = false
    }
  }
})

export const setNotification = (message, duration) => {
  return async dispatch => {
    dispatch(showNotif(message))
    setTimeout(() => {
      dispatch(hideNotif())
    }, duration)
  }
}

export const { showNotif, hideNotif } = notifSlice.actions
export default notifSlice.reducer