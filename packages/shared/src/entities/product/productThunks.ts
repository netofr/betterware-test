import { createAsyncThunk } from '@reduxjs/toolkit';

import { getProducts } from './api/get-products';
import type { Product } from './types';

export const fetchProducts = createAsyncThunk<Product[], void, { rejectValue: string }>(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      return await getProducts();
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Failed to fetch products';

      return rejectWithValue(message);
    }
  },
);
