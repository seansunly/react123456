import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    productCaffee: [], // Renamed from staffType
    productCaffeeById: {}, // Renamed for clarity
    status: "idle", // idle/pending/fulfilled/rejected
    error: null,
};

export const fetprodcutCaffee = createAsyncThunk("ProductCaffee/fetprodcutCaffee",async () =>{
    const response = await fetch("http://localhost:8080/api/v1/product");
    const data = await response.json();
    //console.log(data);
    return data;
});

export const fetchProductCafeById = createAsyncThunk("productCaffeeById/fetchProductCafeById",async (codeProduct) => {
      const response = await fetch(`http://localhost:8080/api/v1/product/${codeProduct}`);
      if (!response.ok) {
        throw new Error(`Error fetching product: ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log("dataById", data);
      return data;
    }
  );


  export const deleteProduct = createAsyncThunk(
    "productCaffee/deleteProduct",
    async (codeProduct, { rejectWithValue }) => {
      try {
        const response = await fetch(`http://localhost:8080/api/v1/product/${codeProduct}`, {
          method: "DELETE",
        });
  
        if (!response.ok) {
          throw new Error(`Failed to delete product: ${response.statusText}`);
        }
  
        return codeProduct; // Return the code of the deleted product
      } catch (err) {
        return rejectWithValue(err.message);
      }
    }
  );

  export const updateProduct = createAsyncThunk(
    "productCaffee/updateProduct",
    async ({ codeProduct, updatedProductData }, { rejectWithValue }) => {
      try {
        if (!codeProduct) {
          throw new Error('Product code is missing');
        }
        const response = await fetch(
          `http://localhost:8080/api/v1/product/${codeProduct}`, // Ensure codeProduct is passed correctly
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProductData),
          }
        );
  
        if (!response.ok) {
          throw new Error(`Failed to update product: ${response.statusText}`);
        }
  
        const data = await response.json();
        return data; // Return the updated product
      } catch (err) {
        return rejectWithValue(err.message);
      }
    }
  );
  
  

export const productCaffeeSlice = createSlice({
    name: "productCaffee",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
       .addCase(fetprodcutCaffee.pending, (state) => {
            state.status = "pending";
        })
       .addCase(fetprodcutCaffee.fulfilled, (state, action) => {
            state.productCaffee = action.payload;
            state.status = "fulfilled";
        })
       .addCase(fetprodcutCaffee.rejected, (state, action) => {
            state.error = action.error.message;
            state.status = "rejected";
        })

        // fetchProductById
      .addCase(fetchProductCafeById.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchProductCafeById.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.productCaffeeById = action.payload;
      })
      .addCase(fetchProductCafeById.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      })

      // Delete Product
      .addCase(deleteProduct.pending, (state) => {
        state.status = "pending";
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.productCaffee = state.productCaffee.filter(
          (product) => product.codeProduct !== action.payload
        );
        state.status = "fulfilled";
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "rejected";
      })

      // Update Product
      .addCase(updateProduct.pending, (state) => {
        state.status = "pending";
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const updatedProduct = action.payload;
        state.productCaffee = state.productCaffee.map((product) =>
          product.codeProduct === updatedProduct.codeProduct
            ? updatedProduct
            : product
        );
        state.status = "fulfilled";
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.error = action.payload;
        state.status = "rejected";
      });
      

      
      
    }
})

export default productCaffeeSlice.reducer;
export const selectAllProductCaffee = (state) => state.productCaffees.productCaffee;
export const selectproductCaffeeById = (state) => state.productCaffees.productCaffeeById;

export const selectStatus= (state)=>state.productCaffees.status;
export const selectError = (state) => state.productCaffees.error;
