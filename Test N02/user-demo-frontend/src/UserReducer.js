// UserReducer.js
import { createSlice } from '@reduxjs/toolkit';

const UserReducer = createSlice({
  name: "users",
  initialState: {
    userData: [], // Initialize userData as an empty array
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    addUser:(state,action)=>{
        // Add the new user to the existing user data
        console.log('addUser payload:', action.payload);
        state.userData = [...state.userData, action.payload];

    }
  },
});

export const { setUserData,addUser } = UserReducer.actions; // Export the named function setUserData
export default UserReducer.reducer;
