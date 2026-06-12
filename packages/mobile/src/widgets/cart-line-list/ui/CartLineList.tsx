import { selectCartLineItems } from 'shared';

import { useAppSelector } from '@/shared';

import { CartLineItemRow } from './CartLineItem';

export function CartLineList() {
  const lineItems = useAppSelector(selectCartLineItems);

  return (
    <>
      {lineItems.map((lineItem) => (
        <CartLineItemRow key={lineItem.product.id} lineItem={lineItem} />
      ))}
    </>
  );
}
