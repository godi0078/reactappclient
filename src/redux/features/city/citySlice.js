import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";

const initialState = {
  cities: [],
  loading: false,
  status: null,
};

export const addCity = createAsyncThunk(
  "city/addCity",
  async ({ name, foundation }) => {
    try {
      const { data } = await axios.post("/city/add", { name, foundation });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getAllCities = createAsyncThunk("city/getAllCities", async () => {
  try {
    const { data } = await axios.get("/city/list");
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteCity = createAsyncThunk("city/deleteCity", async (id) => {
  try {
    const { data } = await axios.delete(`/city/${id}`, id);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addCity.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addCity.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
      state.cities.push(action.payload.newCity);
    });
    builder.addCase(addCity.rejected, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    });

    builder.addCase(getAllCities.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllCities.fulfilled, (state, action) => {
      state.isLoading = false;
      state.cities = action.payload.cities;
    });
    builder.addCase(getAllCities.rejected, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    });

    builder.addCase(deleteCity.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteCity.fulfilled, (state, action) => {
      state.loading = false;
      state.cities = state.cities.filter(
        (city) => city._id !== action.payload._id
      );
    });
    builder.addCase(deleteCity.rejected, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    });
  },
});

export default citySlice.reducer;
