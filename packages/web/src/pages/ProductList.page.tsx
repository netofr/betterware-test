import {
  fetchProducts,
  selectAllProducts,
  selectProductsCount,
  selectProductsError,
  selectProductsStatus,
} from "shared";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { ProductCard } from "../entities";
import { ProductCardSkeleton } from "../shared/ui";
import { Layout } from "../widgets/ui/Layout";

const SKELETON_COUNT = 6;

function ProductListPage() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectAllProducts);
  const productsCount = useAppSelector(selectProductsCount);
  const productsStatus = useAppSelector(selectProductsStatus);
  const productsError = useAppSelector(selectProductsError);

  const handleRetry = () => {
    dispatch(fetchProducts());
  };

  return (
    <Layout title="Products" description="Products list">
      <section className="mx-auto w-full max-w-5xl text-left">
        <h3 className="mb-2 font-bold">Products ({productsCount})</h3>
        {productsStatus === "failed" && productsError ? (
          <div className="mt-8 flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <p className="text-lg font-bold">Error Loading Products...</p>
              <p className="text-text">{productsError}</p>
            </div>
            <button
              type="button"
              className="inline-flex w-fit cursor-pointer rounded-md border border-accent-border bg-accent-bg px-4 py-2 text-sm font-medium text-text-h transition-colors hover:bg-accent hover:text-white focus:outline-none focus:ring-2 focus:ring-accent"
              onClick={handleRetry}
            >
              Try Again
            </button>
          </div>
        ) : null}
        <ul
          aria-busy={productsStatus === "loading"}
          aria-label={
            productsStatus === "loading" ? "Loading products" : undefined
          }
          className="m-0 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 lg:grid-cols-3"
        >
          {productsStatus === "loading"
            ? Array.from({ length: SKELETON_COUNT }, (_, index) => (
                <li key={`product-skeleton-${index}`}>
                  <ProductCardSkeleton />
                </li>
              ))
            : products.map((product) => (
                <li key={product.id}>
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    price={product.price}
                    category={product.category}
                    imageUrl={product.imageUrl}
                  />
                </li>
              ))}
        </ul>
      </section>
    </Layout>
  );
}

export { ProductListPage };
