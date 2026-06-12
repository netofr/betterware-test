import { selectCartItemsCount, selectCartLineItems } from 'shared';

import { useAppNavigation, useAppSelector } from '@/shared';
import { CartLineList, Layout, OrderSummary } from '@/widgets';

import {
  ActionButton,
  ActionButtonText,
  PrimaryActionButton,
  Section,
  Text,
} from './Cart.screen.styles';

export function CartScreen() {
  const navigation = useAppNavigation();
  const lineItems = useAppSelector(selectCartLineItems);
  const itemsCount = useAppSelector(selectCartItemsCount);

  return (
    <Layout
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

            <CartLineList />

            <OrderSummary
              showLineItems={false}
              actions={
                <>
                  <PrimaryActionButton
                    onPress={() => navigation.navigate('Checkout')}
                  >
                    <ActionButtonText>Checkout</ActionButtonText>
                  </PrimaryActionButton>
                  <ActionButton onPress={() => navigation.navigate('Products')}>
                    <ActionButtonText>Continue shopping</ActionButtonText>
                  </ActionButton>
                </>
              }
            />
          </>
        )}
      </Section>
    </Layout>
  );
}
