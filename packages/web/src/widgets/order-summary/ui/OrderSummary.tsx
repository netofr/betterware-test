import type { ReactNode } from 'react';
import {
  selectCartItemsCount,
  selectCartLineItems,
  selectCartTotalAmount,
} from 'shared';

import { useAppSelector } from '@/shared';

type OrderSummaryProps = {
  title?: string;
  showLineItems?: boolean;
  className?: string;
  actions?: ReactNode;
};

const defaultAsideClassName =
  'rounded-lg border border-border bg-bg p-6';

const defaultFooterClassName =
  'mt-8 flex flex-col items-end gap-2 border-t border-border pt-6';

export function OrderSummary({
  title = 'Order summary',
  showLineItems = true,
  className,
  actions,
}: OrderSummaryProps) {
  const lineItems = useAppSelector(selectCartLineItems);
  const itemsCount = useAppSelector(selectCartItemsCount);
  const totalAmount = useAppSelector(selectCartTotalAmount);

  const containerClassName =
    className ??
    (showLineItems ? defaultAsideClassName : defaultFooterClassName);

  return (
    <div className={containerClassName}>
      {showLineItems ? (
        <>
          <h2 className="mb-4 text-lg font-semibold text-text-h">{title}</h2>

          <ul className="m-0 flex list-none flex-col gap-4 p-0">
            {lineItems.map(({ product, quantity, lineTotal }) => (
              <li
                key={product.id}
                className="flex items-start justify-between gap-4 border-b border-border pb-4 last:border-b-0 last:pb-0"
              >
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium text-text-h">
                    {product.name}
                  </p>
                  <p className="text-xs text-text">
                    {quantity} × ${product.price.toFixed(2)}
                  </p>
                </div>
                <p className="text-sm font-semibold text-text-h">
                  ${lineTotal.toFixed(2)}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-2 border-t border-border pt-4">
            <p className="text-sm text-text">
              Total products:{' '}
              <span className="font-medium text-text-h">{itemsCount}</span>
            </p>
            <p className="text-xl font-semibold text-text-h">
              Total: ${totalAmount.toFixed(2)}
            </p>
          </div>
        </>
      ) : (
        <>
          <p className="text-sm text-text">
            Total products:{' '}
            <span className="font-medium text-text-h">{itemsCount}</span>
          </p>
          <p className="text-xl font-semibold text-text-h">
            Total: ${totalAmount.toFixed(2)}
          </p>
          {actions ? <div className="mt-2 flex flex-col gap-2 sm:flex-row">{actions}</div> : null}
        </>
      )}
    </div>
  );
}
