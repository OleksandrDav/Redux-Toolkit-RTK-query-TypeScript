import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUser } from "../../models/IUser";

export const fetchUsers = createAsyncThunk<
  IUser[],
  void,
  { rejectValue: string }
>("user/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await axios.get<IUser[]>(
      "https://jsonplaceholder.typicode.com/user2s"
    );
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue("Failed to fetch users");
  }
});
