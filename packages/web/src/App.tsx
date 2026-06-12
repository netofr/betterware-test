import { useEffect } from "react";
import { fetchProducts } from "shared";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import { useAppDispatch } from '@/shared';
import {
  CartPage,
  CheckoutPage,
  HomePage,
  ProductDetailPage,
  ProductListPage,
} from "./pages";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductListPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
