import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./../../api/axios";

// Create async thunk for fetching data
export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await axios.get("/shops");
  return response.data;
});

// Create async thunk for creating data
export const createData = createAsyncThunk(
  "data/createData",
  async (newData) => {
    const response = await axios.post("/shops", newData);
    console.log("response", response);
    return response.data;
  }
);

// Create async thunk for updating data
// export const updateData = createAsyncThunk('data/updateData', async (updatedData) => {
//   const response = await axios.put(`${apiUrl}/data/${updatedData.id}`, updatedData);
//   return response.data;
// });

// Create async thunk for deleting data
// export const deleteData = createAsyncThunk('data/deleteData', async (id) => {
//   await axios.delete(`${apiUrl}/data/${id}`);
//   return id;
// });

const dataSlice = createSlice({
  name: "data",
  initialState: {
    entities: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.entities = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    // Add similar cases for create, update, and delete data
    // .addCase(createData.fulfilled, (state, action) => {
    //   console.log("action.payload", action.payload.data);
    //   state.entities.push(action.payload.data);
    // });
    //   .addCase(updateData.fulfilled, (state, action) => {
    //     const index = state.entities.findIndex((item) => item.id === action.payload.id);
    //     if (index !== -1) {
    //       state.entities[index] = action.payload;
    //     }
    //   })
    //   .addCase(deleteData.fulfilled, (state, action) => {
    //     state.entities = state.entities.filter((item) => item.id !== action.payload);
    //   });
  },
});

export default dataSlice.reducer;
