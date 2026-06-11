import { useEffect } from "react";
import {
  MOCK_PRODUCTS,
  selectAllProducts,
  selectProductsCount,
  selectSelectedProduct,
  setProducts,
  setSelectedProductId,
} from "shared";
import { useAppDispatch, useAppSelector } from "./app/hooks";

function App() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectAllProducts);
  const productsCount = useAppSelector(selectProductsCount);
  const selectedProduct = useAppSelector(selectSelectedProduct);

  useEffect(() => {
    dispatch(setProducts(MOCK_PRODUCTS));
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
        <h2 className="mb-3">Products ({productsCount})</h2>
        <ul className="m-0 list-none p-0">
          {products.map((product) => {
            const isSelected = selectedProduct?.id === product.id;

            return (
              <li key={product.id}>
                <button
                  type="button"
                  className={`mb-2 flex w-full cursor-pointer justify-between rounded-lg border-2 bg-neutral-500 px-4 py-3 font-inherit text-white ${
                    isSelected ? "border-black" : "border-border"
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
