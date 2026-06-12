import type { ReactNode } from 'react';
import {
  selectCartItemsCount,
  selectCartLineItems,
  selectCartTotalAmount,
} from 'shared';

import { useAppSelector } from '@/shared';

import {
  Actions,
  CardContainer,
  FooterContainer,
  LineItem,
  Text,
  Title,
  TotalHeading,
  TotalsSection,
} from './OrderSummary.styles';

type OrderSummaryProps = {
  title?: string;
  showLineItems?: boolean;
  actions?: ReactNode;
};

export function OrderSummary({
  title = 'Order summary',
  showLineItems = true,
  actions,
}: OrderSummaryProps) {
  const lineItems = useAppSelector(selectCartLineItems);
  const itemsCount = useAppSelector(selectCartItemsCount);
  const totalAmount = useAppSelector(selectCartTotalAmount);

  if (showLineItems) {
    return (
      <CardContainer>
        <Title>{title}</Title>

        {lineItems.map(({ product, quantity, lineTotal }) => (
          <LineItem key={product.id}>
            <Text>
              {product.name}
              {'\n'}
              {quantity} × ${product.price.toFixed(2)}
            </Text>
            <Text>${lineTotal.toFixed(2)}</Text>
          </LineItem>
        ))}

        <TotalsSection>
          <Text>Total products: {itemsCount}</Text>
          <TotalHeading>Total: ${totalAmount.toFixed(2)}</TotalHeading>
        </TotalsSection>
      </CardContainer>
    );
  }

  return (
    <FooterContainer>
      <Text>Total products: {itemsCount}</Text>
      <TotalHeading>Total: ${totalAmount.toFixed(2)}</TotalHeading>
      {actions ? <Actions>{actions}</Actions> : null}
    </FooterContainer>
  );
}
