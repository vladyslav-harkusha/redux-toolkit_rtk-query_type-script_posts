import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { AppDispatch } from "..";
import { IUser } from "../../models/IUser";
import { userSlice } from "./UserSlise";


// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//   try {
//     dispatch(userSlice.actions.usersFetching());
//     const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
//     dispatch(userSlice.actions.usersFetchingSuccess(response.data));
//   } catch (error) {
//     dispatch(userSlice.actions.usersFetchingError(`${error}`));
//   }
// };

export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }

  }
)