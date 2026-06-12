import { type FormEvent } from 'react';
import { Link } from 'react-router-dom';

import type { PaymentFormData } from '../model/types';

const inputClassName =
  'w-full rounded-md border border-border bg-bg px-3 py-2 text-sm text-text-h focus:outline-none focus:ring-2 focus:ring-accent-border';

type CheckoutFormProps = {
  formData: PaymentFormData;
  isSubmitting: boolean;
  onFieldChange: (field: keyof PaymentFormData, value: string) => void;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
};

export function CheckoutForm({
  formData,
  isSubmitting,
  onFieldChange,
  onSubmit,
}: CheckoutFormProps) {
  return (
    <form
      className="flex flex-col gap-5 rounded-lg border border-border bg-bg p-6"
      onSubmit={onSubmit}
    >
      <h2 className="text-lg font-semibold text-text-h">Payment details</h2>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-text-h">Cardholder name</span>
        <input
          type="text"
          required
          autoComplete="cc-name"
          className={inputClassName}
          value={formData.cardholderName}
          onChange={(event) =>
            onFieldChange('cardholderName', event.target.value)
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
          onChange={(event) => onFieldChange('cardNumber', event.target.value)}
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
            onChange={(event) => onFieldChange('expiryDate', event.target.value)}
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
            onChange={(event) => onFieldChange('cvv', event.target.value)}
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
          onChange={(event) => onFieldChange('email', event.target.value)}
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
  );
}
