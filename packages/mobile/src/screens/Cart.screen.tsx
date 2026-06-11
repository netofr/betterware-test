import {
  decrementCartItem,
  incrementCartItem,
  selectCartItemsCount,
  selectCartLineItems,
  selectCartTotalAmount,
} from 'shared';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { ScreenLayout, useAppNavigation } from '../app/navigation';

import {
  ActionButton,
  ActionButtonText,
  Actions,
  Heading,
  LineItem,
  LineItemDetails,
  LineItemFooter,
  LineTotal,
  PrimaryActionButton,
  ProductImage,
  ProductImageContainer,
  QuantityButton,
  QuantityButtonText,
  QuantityControls,
  QuantityText,
  Section,
  Summary,
  Text,
  UnitPrice,
} from './Cart.screen.styles';

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
