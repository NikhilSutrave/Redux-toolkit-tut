import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const STATUS = Object.freeze({
  IDLE: "idle",
  LOADING: "loading",
  ERROR: "error",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUS.IDLE,
  },
  reducers: {
    //     setProducts: (state, action) => {
    //       state.data = action.payload;
    //     },
    //     setStatus: (state, action) => {
    //       state.status = action.payload;
    //     },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUS.LOADING;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUS.IDLE;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUS.ERROR;
      });
  },
});

// export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

//Thunks

export const fetchProducts = createAsyncThunk("product/fetch", async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const data = await res.json();
  return data;
});

// export const fetchProducts = () => {
//   return async function fetchProductsThunk(dispatch, getState) {
//     dispatch(setStatus(STATUS.LOADING));
//     try {
//       const res = await fetch(`https://fakestoreapi.com/products`);
//       const data = await res.json();
//       dispatch(setProducts(data));
//       dispatch(setStatus(STATUS.IDLE));
//     } catch (err) {
//       dispatch(setStatus(STATUS.ERROR));
//       console.log(err);
//     }
//   };
// };
