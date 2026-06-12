export { apiClient, configureApi, getApiConfig } from "./api";
export type { ApiConfig } from "./api";

export { formatGreeting } from "./utils/formatGreeting";

export {
  addToCart,
  cartReducer,
  clearCart,
  createCartPersistenceMiddleware,
  decrementCartItem,
  hydrateCart,
  hydrateCartFromStorage,
  incrementCartItem,
  loadCartState,
  loadCartStateSync,
  removeFromCart,
  selectAllCartItems,
  selectCartItemByProductId,
  selectCartItemQuantity,
  selectCartItemsCount,
  selectCartLineItems,
  selectCartProductIds,
  selectCartTotalAmount,
  selectCartUniqueItemsCount,
} from "./entities/cart";
export type {
  CartItem,
  CartLineItem,
  CartState,
  CartStorage,
} from "./entities/cart";

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
