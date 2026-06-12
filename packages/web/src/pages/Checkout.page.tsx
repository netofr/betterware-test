import { Navigate } from 'react-router-dom';
import { selectCartLineItems } from 'shared';

import {
  CheckoutForm,
  PurchaseSuccessModal,
  useCheckout,
} from '@/features/checkout';
import { useAppSelector } from '@/shared';
import { Layout, OrderSummary } from '@/widgets';

export function CheckoutPage() {
  const lineItems = useAppSelector(selectCartLineItems);
  const {
    formData,
    updateField,
    isSubmitting,
    showSuccessModal,
    completedOrder,
    handleSubmit,
    handleCloseSuccessModal,
  } = useCheckout();

  if (lineItems.length === 0 && !showSuccessModal) {
    return <Navigate to="/cart" replace />;
  }

  return (
    <Layout
      title="Checkout"
      description="Review your order and complete your purchase"
    >
      <section className="mx-auto grid w-full max-w-5xl gap-8 text-left lg:grid-cols-[1fr_1.2fr]">
        <OrderSummary />

        <CheckoutForm
          formData={formData}
          isSubmitting={isSubmitting}
          onFieldChange={updateField}
          onSubmit={handleSubmit}
        />
      </section>

      {showSuccessModal && completedOrder ? (
        <PurchaseSuccessModal
          completedOrder={completedOrder}
          formData={formData}
          onClose={handleCloseSuccessModal}
        />
      ) : null}
    </Layout>
  );
}
