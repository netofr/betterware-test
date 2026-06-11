import {
  selectAllProducts,
  selectProductsCount,
  selectProductsError,
  selectProductsStatus,
} from "shared";

import { useAppSelector } from "../app/hooks";
import { ProductCard } from "../entities";
import { ProductCardSkeleton } from "../shared/ui";
import { Layout } from "../widgets/ui/Layout";

const SKELETON_COUNT = 6;

function ProductListPage() {
  const products = useAppSelector(selectAllProducts);
  const productsCount = useAppSelector(selectProductsCount);
  const productsStatus = useAppSelector(selectProductsStatus);
  const productsError = useAppSelector(selectProductsError);

  return (
    <Layout title="Products" description="Products list">
      <section className="mx-auto w-full max-w-5xl text-left">
        <h3 className="mb-2 font-bold">Products ({productsCount})</h3>
        {productsStatus === "failed" && productsError ? (
          <p className="text-text">{productsError}</p>
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
