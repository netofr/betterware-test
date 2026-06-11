export { getProducts } from './api/get-products';
export {
  addProduct,
  productReducer,
  productsAdapter,
  removeProduct,
  setProducts,
  setProductsError,
  setProductsStatus,
  setSelectedProductId,
} from './productSlice';
export { fetchProducts } from './productThunks';
export type { ProductsState } from './productSlice';
export {
  selectAllProducts,
  selectProductById,
  selectProductIds,
  selectProductsCount,
  selectProductsError,
  selectProductsStatus,
  selectSelectedProduct,
  selectSelectedProductId,
} from './productSelectors';
export { MOCK_PRODUCTS } from './mock-products';
export type { Product, ProductsStatus } from './types';
