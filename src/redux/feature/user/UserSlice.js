import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Register_Url } from "../../api/indexapi";

const initialState = {
  users: {},
  status: "idle", // idle / pending / fulfilled / rejected
  error: null,
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async ({
    userName,
    password,
    confirmPassword,
    email,
    phone,
    gender,
    acceptTerm,
  }) => {
    //convert javascript object to json
    const body = JSON.stringify({
      userName,
      password,
      confirmPassword,
      email,
      phone,
      gender,
      acceptTerm,
    });
    const response = await fetch(`${Register_Url}auth/registerCustomer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
    //convert json to javascript object
    const data = await response.json();
    return data;
  }
);

// ceate reducer and action

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.users.push(action.payload);
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer; // This ensures you're exporting the reducer
export const selectAllStaffType = (state) => state.user.users;
