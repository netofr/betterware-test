import { Image } from 'react-native';
import {
  decrementCartItem,
  incrementCartItem,
  selectCartItemsCount,
  selectCartLineItems,
  selectCartTotalAmount,
} from 'shared';
import styled from 'styled-components/native';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { ScreenLayout, useAppNavigation } from '../app/navigation';

const Section = styled.View`
  width: 100%;
`;

const Text = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
`;

const Heading = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 16px;
  font-weight: 600;
`;

const LineItem = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  padding: 12px;
  margin-bottom: 12px;
`;

const ProductImageContainer = styled.View`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.border};
  align-items: center;
  justify-content: center;
  padding: 4px;
`;

const ProductImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const LineItemDetails = styled.View`
  flex: 1;
  gap: 4px;
`;

const UnitPrice = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13px;
`;

const LineItemFooter = styled.View`
  align-items: flex-end;
  gap: 8px;
`;

const QuantityControls = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

const QuantityButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  align-items: center;
  justify-content: center;
`;

const QuantityButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 18px;
  font-weight: 600;
`;

const QuantityText = styled.Text`
  min-width: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 14px;
  font-weight: 600;
`;

const LineTotal = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 16px;
  font-weight: 600;
`;

const Summary = styled.View`
  margin-top: 16px;
  padding-top: 16px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.border};
  align-items: flex-end;
  gap: 8px;
`;

const ActionButton = styled.TouchableOpacity`
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  padding-horizontal: 16px;
  padding-vertical: 10px;
  margin-top: 8px;
`;

const PrimaryActionButton = styled(ActionButton)`
  border-color: ${({ theme }) => theme.colors.accentBorder};
  background-color: ${({ theme }) => theme.colors.accentBackground};
`;

const ActionButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 14px;
  font-weight: 500;
`;

const Actions = styled.View`
  flex-direction: row;
  gap: 8px;
  margin-top: 8px;
`;

export function CartScreen() {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const lineItems = useAppSelector(selectCartLineItems);
  const itemsCount = useAppSelector(selectCartItemsCount);
  const totalAmount = useAppSelector(selectCartTotalAmount);

  return (
    <ScreenLayout
      title="Shopping cart"
      description="Review your selected products"
    >
      <Section>
        {lineItems.length === 0 ? (
          <>
            <Text>Your cart is empty.</Text>
            <PrimaryActionButton
              onPress={() => navigation.navigate('Products')}
            >
              <ActionButtonText>Browse products</ActionButtonText>
            </PrimaryActionButton>
          </>
        ) : (
          <>
            <Text>
              {itemsCount} {itemsCount === 1 ? 'item' : 'items'} in your cart
            </Text>

            {lineItems.map(({ product, quantity, lineTotal }) => (
              <LineItem key={product.id}>
                <ProductImageContainer>
                  {product.imageUrl ? (
                    <ProductImage
                      source={{ uri: product.imageUrl }}
                      resizeMode="contain"
                    />
                  ) : (
                    <Text>No image</Text>
                  )}
                </ProductImageContainer>

                <LineItemDetails>
                  <Heading>{product.name}</Heading>
                  <UnitPrice>${product.price.toFixed(2)} each</UnitPrice>
                </LineItemDetails>

                <LineItemFooter>
                  <QuantityControls>
                    <QuantityButton
                      accessibilityLabel={`Decrease quantity of ${product.name}`}
                      onPress={() => dispatch(decrementCartItem(product.id))}
                    >
                      <QuantityButtonText>−</QuantityButtonText>
                    </QuantityButton>
                    <QuantityText>{quantity}</QuantityText>
                    <QuantityButton
                      accessibilityLabel={`Increase quantity of ${product.name}`}
                      onPress={() => dispatch(incrementCartItem(product.id))}
                    >
                      <QuantityButtonText>+</QuantityButtonText>
                    </QuantityButton>
                  </QuantityControls>
                  <LineTotal>${lineTotal.toFixed(2)}</LineTotal>
                </LineItemFooter>
              </LineItem>
            ))}

            <Summary>
              <Text>Total products: {itemsCount}</Text>
              <Heading>Total: ${totalAmount.toFixed(2)}</Heading>
              <Actions>
                <PrimaryActionButton
                  onPress={() => navigation.navigate('Checkout')}
                >
                  <ActionButtonText>Checkout</ActionButtonText>
                </PrimaryActionButton>
                <ActionButton onPress={() => navigation.navigate('Products')}>
                  <ActionButtonText>Continue shopping</ActionButtonText>
                </ActionButton>
              </Actions>
            </Summary>
          </>
        )}
      </Section>
    </ScreenLayout>
  );
}
