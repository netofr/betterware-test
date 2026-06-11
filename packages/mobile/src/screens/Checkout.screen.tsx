import { useEffect, useState } from 'react';
import { Modal, Pressable } from 'react-native';
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

const SecondaryActionButton = styled(ActionButton)`
  background-color: transparent;
`;

const ActionButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 14px;
  font-weight: 600;
`;

const ModalOverlay = styled.Pressable`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 24px;
`;

const ModalCard = styled.View`
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  padding: 24px;
`;

const ModalMessage = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  margin-bottom: 24px;
`;

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
