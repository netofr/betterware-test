import {
  CheckoutActions,
  PurchaseSuccessModal,
  useCheckout,
} from '@/features/checkout';
import { useAppNavigation } from '@/shared';
import { Layout, OrderSummary } from '@/widgets';

import { Section } from './Checkout.screen.styles';

export function CheckoutScreen() {
  const navigation = useAppNavigation();
  const {
    isSuccessModalVisible,
    handleCompletePurchase,
    handleCloseSuccessModal,
    shouldRedirect,
  } = useCheckout();

  if (shouldRedirect) {
    return null;
  }

  return (
    <Layout
      title="Checkout"
      description="Review your order and complete your purchase"
    >
      <Section>
        <OrderSummary />

        <CheckoutActions
          onCompletePurchase={handleCompletePurchase}
          onBackToCart={() => navigation.navigate('Cart')}
        />
      </Section>

      <PurchaseSuccessModal
        visible={isSuccessModalVisible}
        onClose={handleCloseSuccessModal}
      />
    </Layout>
  );
}
