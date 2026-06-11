export { apiClient, configureApi, getApiConfig } from "./api";
export type { ApiConfig } from "./api";

export { formatGreeting } from "./utils/formatGreeting";

export {
  addProduct,
  fetchProducts,
  getProducts,
  productReducer,
  removeProduct,
  selectAllProducts,
  selectProductById,
  selectProductsCount,
  selectProductsError,
  selectProductsStatus,
  selectSelectedProduct,
  selectSelectedProductId,
  setProducts,
  setSelectedProductId,
} from "./entities/product";
export type {
  Product,
  ProductsState,
  ProductsStatus,
} from "./entities/product";
