import { useEffect } from "react";
import {
  fetchProducts,
  selectAllProducts,
  selectProductsCount,
  selectProductsError,
  selectProductsStatus,
  selectSelectedProduct,
  setSelectedProductId,
} from "shared";
import { useAppDispatch, useAppSelector } from "./app/hooks";

function App() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectAllProducts);
  const productsCount = useAppSelector(selectProductsCount);
  const productsStatus = useAppSelector(selectProductsStatus);
  const productsError = useAppSelector(selectProductsError);
  const selectedProduct = useAppSelector(selectSelectedProduct);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <section className="flex flex-col place-content-center place-items-center gap-2 px-5 pt-8 pb-2">
        <div>
          <h1>Betterware App</h1>
          <p>Mini e-commerce</p>
        </div>
      </section>

      <section className="mx-auto mb-8 w-[480px] px-4">
        <h3 className="mb-3 font-bold">Products ({productsCount})</h3>
        {productsStatus === "loading" ? (
          <p className="text-text">Loading products…</p>
        ) : null}
        {productsStatus === "failed" && productsError ? (
          <p className="text-text">{productsError}</p>
        ) : null}
        <ul className="m-0 list-none p-0">
          {products.map((product) => {
            const isSelected = selectedProduct?.id === product.id;

            return (
              <li key={product.id}>
                <button
                  type="button"
                  className={`mb-2 flex w-full cursor-pointer justify-between rounded-lg border-2 px-4 py-3 font-inherit text-white ${
                    isSelected
                      ? "border-black bg-black"
                      : "border-neutral-600 bg-neutral-600"
                  }`}
                  onClick={() => dispatch(setSelectedProductId(product.id))}
                >
                  <span>{product.name}</span>
                  <span>${product.price.toFixed(2)}</span>
                </button>
              </li>
            );
          })}
        </ul>
        {selectedProduct ? (
          <p className="mt-3 text-text">{selectedProduct.description}</p>
        ) : null}
      </section>
    </>
  );
}

export default App;
