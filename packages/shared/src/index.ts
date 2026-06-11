export { formatGreeting } from './utils/formatGreeting';

export {
  addProduct,
  MOCK_PRODUCTS,
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
} from './entities/product';
export type { Product, ProductsState, ProductsStatus } from './entities/product';
