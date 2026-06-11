import { type FormEvent, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  clearCart,
  selectCartItemsCount,
  selectCartLineItems,
  selectCartTotalAmount,
} from "shared";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Layout } from "../widgets/ui/Layout";

type PaymentFormData = {
  cardholderName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  email: string;
};

const initialFormData: PaymentFormData = {
  cardholderName: "",
  cardNumber: "",
  expiryDate: "",
  cvv: "",
  email: "",
};

const inputClassName =
  "w-full rounded-md border border-border bg-bg px-3 py-2 text-sm text-text-h focus:outline-none focus:ring-2 focus:ring-accent-border";

type CompletedOrder = {
  itemsCount: number;
  totalAmount: number;
};

export function CheckoutPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const lineItems = useAppSelector(selectCartLineItems);
  const itemsCount = useAppSelector(selectCartItemsCount);
  const totalAmount = useAppSelector(selectCartTotalAmount);
  const [formData, setFormData] = useState<PaymentFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<CompletedOrder | null>(
    null,
  );

  if (lineItems.length === 0 && !showSuccessModal) {
    return <Navigate to="/cart" replace />;
  }

  const updateField = (field: keyof PaymentFormData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    setCompletedOrder({ itemsCount, totalAmount });
    dispatch(clearCart());
    setShowSuccessModal(true);
    setIsSubmitting(false);
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    navigate("/products");
  };

  return (
    <Layout
      title="Checkout"
      description="Review your order and complete your purchase"
    >
      <section className="mx-auto grid w-full max-w-5xl gap-8 text-left lg:grid-cols-[1fr_1.2fr]">
        <aside className="rounded-lg border border-border bg-bg p-6">
          <h2 className="mb-4 text-lg font-semibold text-text-h">
            Order summary
          </h2>

          <ul className="m-0 flex list-none flex-col gap-4 p-0">
            {lineItems.map(({ product, quantity, lineTotal }) => (
              <li
                key={product.id}
                className="flex items-start justify-between gap-4 border-b border-border pb-4 last:border-b-0 last:pb-0"
              >
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium text-text-h">
                    {product.name}
                  </p>
                  <p className="text-xs text-text">
                    {quantity} × ${product.price.toFixed(2)}
                  </p>
                </div>
                <p className="text-sm font-semibold text-text-h">
                  ${lineTotal.toFixed(2)}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-2 border-t border-border pt-4">
            <p className="text-sm text-text">
              Total products:{" "}
              <span className="font-medium text-text-h">{itemsCount}</span>
            </p>
            <p className="text-xl font-semibold text-text-h">
              Total: ${totalAmount.toFixed(2)}
            </p>
          </div>
        </aside>

        <form
          className="flex flex-col gap-5 rounded-lg border border-border bg-bg p-6"
          onSubmit={handleSubmit}
        >
          <h2 className="text-lg font-semibold text-text-h">Payment details</h2>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-text-h">
              Cardholder name
            </span>
            <input
              type="text"
              required
              autoComplete="cc-name"
              className={inputClassName}
              value={formData.cardholderName}
              onChange={(event) =>
                updateField("cardholderName", event.target.value)
              }
            />
          </label>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-text-h">Card number</span>
            <input
              type="text"
              required
              inputMode="numeric"
              autoComplete="cc-number"
              maxLength={19}
              placeholder="1234 5678 9012 3456"
              className={inputClassName}
              value={formData.cardNumber}
              onChange={(event) =>
                updateField("cardNumber", event.target.value)
              }
            />
          </label>

          <div className="grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-text-h">
                Expiration date
              </span>
              <input
                type="text"
                required
                inputMode="numeric"
                autoComplete="cc-exp"
                maxLength={5}
                placeholder="MM/YY"
                className={inputClassName}
                value={formData.expiryDate}
                onChange={(event) =>
                  updateField("expiryDate", event.target.value)
                }
              />
            </label>

            <label className="flex flex-col gap-1.5">
              <span className="text-sm font-medium text-text-h">CVV</span>
              <input
                type="password"
                required
                inputMode="numeric"
                autoComplete="cc-csc"
                maxLength={4}
                placeholder="123"
                className={inputClassName}
                value={formData.cvv}
                onChange={(event) => updateField("cvv", event.target.value)}
              />
            </label>
          </div>

          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-medium text-text-h">
              Email for receipt
            </span>
            <input
              type="email"
              required
              autoComplete="email"
              className={inputClassName}
              value={formData.email}
              onChange={(event) => updateField("email", event.target.value)}
            />
          </label>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex cursor-pointer items-center justify-center rounded-md border border-accent-border bg-accent-bg px-4 py-2 text-sm font-medium text-text-h transition-colors hover:bg-accent hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              Complete purchase
            </button>

            <Link
              to="/cart"
              className="inline-flex items-center justify-center rounded-md border border-border px-4 py-2 text-sm text-text-h transition-colors hover:bg-code-bg"
            >
              Back to cart
            </Link>
          </div>
        </form>
      </section>

      {showSuccessModal && completedOrder && (
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
              Your order has been placed successfully. A receipt will be sent to{" "}
              {formData.email}.
            </p>
            <p className="mt-4 text-sm text-text">
              Items purchased:{" "}
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
              onClick={handleCloseSuccessModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}
