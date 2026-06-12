import { selectCartLineItems } from 'shared';

import { useAppSelector } from '@/shared';

import { CartLineItemRow } from './CartLineItem';

export function CartLineList() {
  const lineItems = useAppSelector(selectCartLineItems);

  return (
    <ul className="m-0 flex list-none flex-col gap-4 p-0">
      {lineItems.map((lineItem) => (
        <CartLineItemRow key={lineItem.product.id} lineItem={lineItem} />
      ))}
    </ul>
  );
}
