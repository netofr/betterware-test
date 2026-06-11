import { useEffect, useState } from 'react';
import {
  clearCart,
  selectCartItemsCount,
  selectCartLineItems,
  selectCartTotalAmount,
} from 'shared';
import styled from 'styled-components/native';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { ScreenLayout, useAppNavigation } from '../app/navigation';

const Section = styled.View`
  width: 100%;
  gap: 16px;
`;

const Card = styled.View`
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  padding: 16px;
`;

const Heading = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
`;

const Text = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
`;

const LineItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.border};
`;

const ActionButton = styled.TouchableOpacity`
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.accentBorder};
  background-color: ${({ theme }) => theme.colors.accentBackground};
  padding-horizontal: 16px;
  padding-vertical: 12px;
  align-items: center;
`;

const SpacedActionButton = styled(ActionButton)`
  margin-top: 16px;
`;

const SecondaryActionButton = styled(ActionButton)`
  background-color: transparent;
`;

const ActionButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 14px;
  font-weight: 600;
`;

export function CheckoutScreen() {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const lineItems = useAppSelector(selectCartLineItems);
  const itemsCount = useAppSelector(selectCartItemsCount);
  const totalAmount = useAppSelector(selectCartTotalAmount);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (lineItems.length === 0 && !isComplete) {
      navigation.replace('Cart');
    }
  }, [isComplete, lineItems.length, navigation]);

  const handleCompletePurchase = () => {
    dispatch(clearCart());
    setIsComplete(true);
  };

  if (lineItems.length === 0 && !isComplete) {
    return null;
  }

  return (
    <ScreenLayout
      title="Checkout"
      description="Review your order and complete your purchase"
    >
      <Section>
        {isComplete ? (
          <Card>
            <Heading>Purchase completed!</Heading>
            <Text>
              Your order has been placed successfully. Thank you for shopping
              with Betterware.
            </Text>
            <SpacedActionButton onPress={() => navigation.replace('Products')}>
              <ActionButtonText>Continue shopping</ActionButtonText>
            </SpacedActionButton>
          </Card>
        ) : (
          <>
            <Card>
              <Heading>Order summary</Heading>
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
              <Text>
                Total products: {itemsCount}
                {'\n'}
                Total: ${totalAmount.toFixed(2)}
              </Text>
            </Card>

            <ActionButton onPress={handleCompletePurchase}>
              <ActionButtonText>Complete purchase</ActionButtonText>
            </ActionButton>

            <SecondaryActionButton onPress={() => navigation.navigate('Cart')}>
              <ActionButtonText>Back to cart</ActionButtonText>
            </SecondaryActionButton>
          </>
        )}
      </Section>
    </ScreenLayout>
  );
}
