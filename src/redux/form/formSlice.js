import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const submitFormAsync = createAsyncThunk(
    async (formData) => {
       const response = await fetch("url", {
        method: "POST",
        headers : { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
       });
       return response.json();
    }
);

const formSlice = createSlice({
    name: "form",
  initialState: {
    formData: {},
    status: "idle", // idle | loading | succeeded | failed
    error: null,
  },
  reducers: {
    submitForm: (state, action) => {
      state.formData = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitFormAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(submitFormAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.formData = action.payload;
      })
      .addCase(submitFormAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
})

export const {submitForm} = formSlice.actions;
export default formSlice.reducer;