import { Modal, Pressable } from 'react-native';

import {
  ActionButton,
  ActionButtonText,
  Heading,
  ModalCard,
  ModalMessage,
  ModalOverlay,
} from './PurchaseSuccessModal.styles';

type PurchaseSuccessModalProps = {
  visible: boolean;
  onClose: () => void;
};

export function PurchaseSuccessModal({
  visible,
  onClose,
}: PurchaseSuccessModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <ModalOverlay onPress={onClose}>
        <Pressable onPress={() => {}}>
          <ModalCard>
            <Heading>Purchase completed!</Heading>
            <ModalMessage>
              Your order has been placed successfully. Thank you for shopping
              with Betterware.
            </ModalMessage>
            <ActionButton onPress={onClose}>
              <ActionButtonText>Continue shopping</ActionButtonText>
            </ActionButton>
          </ModalCard>
        </Pressable>
      </ModalOverlay>
    </Modal>
  );
}
