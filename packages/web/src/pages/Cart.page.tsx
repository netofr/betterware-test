import { Link } from 'react-router-dom';
import { selectCartItemsCount, selectCartLineItems } from 'shared';

import { useAppSelector } from '@/shared';
import { CartLineList, Layout, OrderSummary } from '@/widgets';

export function CartPage() {
  const lineItems = useAppSelector(selectCartLineItems);
  const itemsCount = useAppSelector(selectCartItemsCount);

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
              {itemsCount} {itemsCount === 1 ? 'item' : 'items'} in your cart
            </p>

            <CartLineList />

            <OrderSummary
              showLineItems={false}
              actions={
                <>
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
                </>
              }
            />
          </>
        )}
      </section>
    </Layout>
  );
}
