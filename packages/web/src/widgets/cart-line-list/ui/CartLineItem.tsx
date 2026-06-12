import type { CartLineItem } from 'shared';

import { CartItemControls } from '@/features/cart-item-controls';

type CartLineItemRowProps = {
  lineItem: CartLineItem;
};

export function CartLineItemRow({ lineItem }: CartLineItemRowProps) {
  const { product, quantity, lineTotal } = lineItem;

  return (
    <li
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
        <h3 className="text-base font-medium text-text-h">{product.name}</h3>
        <p className="text-sm text-text">${product.price.toFixed(2)} each</p>
      </div>

      <CartItemControls
        productId={product.id}
        productName={product.name}
        quantity={quantity}
      />

      <p className="min-w-24 text-right text-base font-semibold text-text-h">
        ${lineTotal.toFixed(2)}
      </p>
    </li>
  );
}
