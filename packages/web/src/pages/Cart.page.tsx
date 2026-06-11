import { Link } from "react-router-dom";
import {
  decrementCartItem,
  incrementCartItem,
  selectCartItemsCount,
  selectCartLineItems,
  selectCartTotalAmount,
} from "shared";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Layout } from "../widgets/ui/Layout";

export function CartPage() {
  const dispatch = useAppDispatch();
  const lineItems = useAppSelector(selectCartLineItems);
  const itemsCount = useAppSelector(selectCartItemsCount);
  const totalAmount = useAppSelector(selectCartTotalAmount);

  return (
    <Layout title="Shopping cart" description="Review your selected products">
      <section className="mx-auto w-full max-w-3xl text-left">
        {lineItems.length === 0 ? (
          <div className="flex flex-col gap-4">
            <p className="text-text">Your cart is empty.</p>
            <Link
              to="/products"
              className="inline-flex w-fit rounded-md border border-accent-border bg-accent-bg px-4 py-2 text-sm font-medium text-text-h transition-colors hover:bg-accent hover:text-white"
            >
              Browse products
            </Link>
          </div>
        ) : (
          <>
            <p className="mb-6 text-sm text-text">
              {itemsCount} {itemsCount === 1 ? "item" : "items"} in your cart
            </p>

            <ul className="m-0 flex list-none flex-col gap-4 p-0">
              {lineItems.map(({ product, quantity, lineTotal }) => (
                <li
                  key={product.id}
                  className="flex flex-col gap-4 rounded-lg border border-border bg-bg p-4 sm:flex-row sm:items-center"
                >
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-md border border-border bg-code-bg p-2">
                    {product.imageUrl ? (
                      <img
                        src={product.imageUrl}
                        alt={product.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    ) : (
                      <span className="text-xs text-text">No image</span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col gap-1">
                    <h3 className="text-base font-medium text-text-h">
                      {product.name}
                    </h3>
                    <p className="text-sm text-text">
                      ${product.price.toFixed(2)} each
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      aria-label={`Decrease quantity of ${product.name}`}
                      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-border text-text-h transition-colors hover:bg-code-bg"
                      onClick={() => dispatch(decrementCartItem(product.id))}
                    >
                      −
                    </button>
                    <span className="min-w-8 text-center text-sm font-medium text-text-h">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      aria-label={`Increase quantity of ${product.name}`}
                      className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-border text-text-h transition-colors hover:bg-code-bg"
                      onClick={() => dispatch(incrementCartItem(product.id))}
                    >
                      +
                    </button>
                  </div>

                  <p className="min-w-24 text-right text-base font-semibold text-text-h">
                    ${lineTotal.toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col items-end gap-2 border-t border-border pt-6">
              <p className="text-sm text-text">
                Total products:{" "}
                <span className="font-medium text-text-h">{itemsCount}</span>
              </p>
              <p className="text-xl font-semibold text-text-h">
                Total: ${totalAmount.toFixed(2)}
              </p>
              <div className="mt-2 flex flex-col gap-2 sm:flex-row">
                <Link
                  to="/checkout"
                  className="inline-flex rounded-md border border-accent-border bg-accent-bg px-4 py-2 text-sm font-medium text-text-h transition-colors hover:bg-accent hover:text-white"
                >
                  Checkout
                </Link>
                <Link
                  to="/products"
                  className="inline-flex rounded-md border border-border px-4 py-2 text-sm text-text-h transition-colors hover:bg-code-bg"
                >
                  Continue shopping
                </Link>
              </div>
            </div>
          </>
        )}
      </section>
    </Layout>
  );
}
