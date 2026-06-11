import { useEffect, useState } from 'react';
import { Modal, Pressable } from 'react-native';
import {
  clearCart,
  selectCartItemsCount,
  selectCartLineItems,
  selectCartTotalAmount,
} from 'shared';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { ScreenLayout, useAppNavigation } from '../app/navigation';

import {
  ActionButton,
  ActionButtonText,
  Card,
  Heading,
  LineItem,
  ModalCard,
  ModalMessage,
  ModalOverlay,
  SecondaryActionButton,
  Section,
  Text,
} from './Checkout.screen.styles';

export function CheckoutScreen() {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const lineItems = useAppSelector(selectCartLineItems);
  const itemsCount = useAppSelector(selectCartItemsCount);
  const totalAmount = useAppSelector(selectCartTotalAmount);
  const [hasCompletedPurchase, setHasCompletedPurchase] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

  useEffect(() => {
    if (lineItems.length === 0 && !hasCompletedPurchase) {
      navigation.replace('Cart');
    }
  }, [hasCompletedPurchase, lineItems.length, navigation]);

  const handleCompletePurchase = () => {
    dispatch(clearCart());
    setHasCompletedPurchase(true);
    setIsSuccessModalVisible(true);
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessModalVisible(false);
    navigation.replace('Products');
  };

  if (lineItems.length === 0 && !hasCompletedPurchase) {
    return null;
  }

  return (
    <ScreenLayout
      title="Checkout"
      description="Review your order and complete your purchase"
    >
      <Section>
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
      </Section>

      <Modal
        visible={isSuccessModalVisible}
        transparent
        animationType="fade"
        onRequestClose={handleCloseSuccessModal}
      >
        <ModalOverlay onPress={handleCloseSuccessModal}>
          <Pressable onPress={() => {}}>
            <ModalCard>
              <Heading>Purchase completed!</Heading>
              <ModalMessage>
                Your order has been placed successfully. Thank you for shopping
                with Betterware.
              </ModalMessage>
              <ActionButton onPress={handleCloseSuccessModal}>
                <ActionButtonText>Continue shopping</ActionButtonText>
              </ActionButton>
            </ModalCard>
          </Pressable>
        </ModalOverlay>
      </Modal>
    </ScreenLayout>
  );
}
