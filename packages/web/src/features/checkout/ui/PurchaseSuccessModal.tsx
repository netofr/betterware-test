import type { CompletedOrder, PaymentFormData } from '../model/types';

type PurchaseSuccessModalProps = {
  completedOrder: CompletedOrder;
  formData: PaymentFormData;
  onClose: () => void;
};

export function PurchaseSuccessModal({
  completedOrder,
  formData,
  onClose,
}: PurchaseSuccessModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="purchase-success-title"
        className="relative w-full max-w-md rounded-lg border border-border bg-white p-6 shadow-[var(--shadow)]"
      >
        <h2
          id="purchase-success-title"
          className="text-lg font-semibold text-text-h"
        >
          Purchase completed!
        </h2>
        <p className="mt-2 text-sm text-text">
          Your order has been placed successfully. A receipt will be sent to{' '}
          {formData.email}.
        </p>
        <p className="mt-4 text-sm text-text">
          Items purchased:{' '}
          <span className="font-medium text-text-h">
            {completedOrder.itemsCount}
          </span>
        </p>
        <p className="mt-1 text-base font-semibold text-text-h">
          Total paid: ${completedOrder.totalAmount.toFixed(2)}
        </p>

        <button
          type="button"
          className="mt-6 inline-flex w-full cursor-pointer items-center justify-center rounded-md border border-accent-border bg-accent-bg px-4 py-2 text-sm font-medium text-text-h transition-colors hover:bg-accent hover:text-white"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
}
