import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../../utils/axios";

const initialState = {
  lists: [],
  isLoading: false,
  status: null,
};

export const addList = createAsyncThunk(
  "list/addList",
  async ({ name, acronym, color }) => {
    try {
      const { data } = await axios.post("/list/add", { name, acronym, color });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const addCityToList = createAsyncThunk(
  "list/addCityToList",
  async ({ listId, cityId }) => {
    try {
      const { data } = await axios.post("/list/addCity", { listId, cityId });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getAllLists = createAsyncThunk("list/getAllLists", async () => {
  try {
    const { data } = await axios.get("/list/list");
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteList = createAsyncThunk("list/deleteList", async (id) => {
  try {
    const { data } = await axios.delete(`/list/${id}`, id);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const deleteCityFromList = createAsyncThunk(
  "list/deleteCityFromList",
  async ({ listId, cityId }) => {
    try {
      if (listId !== undefined && cityId !== undefined) {
        const { data } = await axios.delete(
          `/list/removeCity/${listId}/${cityId}`
        );
        return data;
      } else {
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }
);

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
      state.lists.push(action.payload.newlist);
    });
    builder.addCase(addList.rejected, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    });

    builder.addCase(getAllLists.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllLists.fulfilled, (state, action) => {
      state.isLoading = false;
      state.lists = action.payload.lists;
    });
    builder.addCase(getAllLists.rejected, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    });

    builder.addCase(deleteList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.lists = state.lists.filter(
        (list) => list._id !== action.payload._id
      );
    });
    builder.addCase(deleteList.rejected, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    });

    builder.addCase(deleteCityFromList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteCityFromList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
      state.lists = action.payload.lists;
    });
    builder.addCase(deleteCityFromList.rejected, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    });

    builder.addCase(addCityToList.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addCityToList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.lists = state.lists.filter(
        (list) => list._id !== action.payload._id
      );
    });
    builder.addCase(addCityToList.rejected, (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    });
  },
});

export default listSlice.reducer;
