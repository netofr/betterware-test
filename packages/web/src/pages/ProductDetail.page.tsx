import { Link, useParams } from 'react-router-dom';
import { selectProductById } from 'shared';

import { AddToCartButton } from '@/features/add-to-cart';
import { useAppSelector } from '@/shared';
import { Layout } from '@/widgets';

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = useAppSelector((state) =>
    id ? selectProductById(state, id) : undefined,
  );

  return (
    <Layout title="Product details" description="Full product information">
      {!id || !product ? (
        <section className="mx-auto w-full max-w-lg text-left">
          <p className="text-text">Product not found.</p>
          <Link
            to="/products"
            className="mt-4 inline-block text-sm text-accent hover:underline"
          >
            Back to products
          </Link>
        </section>
      ) : (
        <section className="mx-auto grid w-full max-w-3xl gap-8 text-left md:grid-cols-2">
          <div className="flex aspect-square items-center justify-center rounded-lg border border-border bg-code-bg p-6">
            {product.imageUrl ? (
              <img
                src={product.imageUrl}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />
            ) : (
              <span className="text-sm text-text">No image</span>
            )}
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-sm uppercase tracking-wide text-text">
              {product.category}
            </p>
            <h2 className="text-2xl font-medium text-text-h">{product.name}</h2>
            <p className="text-2xl font-semibold text-text-h">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-text">{product.description}</p>

            <div className="flex flex-col gap-2">
              <AddToCartButton
                productId={product.id}
                productName={product.name}
                className="inline-flex w-fit cursor-pointer rounded-md border border-accent-border bg-accent-bg px-4 py-2 text-sm font-medium text-text-h transition-colors hover:bg-accent hover:text-white"
              />

              <Link
                to="/products"
                className="inline-flex w-fit rounded-md border border-border px-4 py-2 text-sm text-text-h transition-colors hover:bg-code-bg"
              >
                Back to products
              </Link>
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}
