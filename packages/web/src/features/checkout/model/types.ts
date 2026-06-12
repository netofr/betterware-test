export type PaymentFormData = {
  cardholderName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  email: string;
};

export type CompletedOrder = {
  itemsCount: number;
  totalAmount: number;
};

export const initialPaymentFormData: PaymentFormData = {
  cardholderName: 'John Doe',
  cardNumber: '1234 5678 9012 3456',
  expiryDate: '12/2026',
  cvv: '123',
  email: 'john.doe@example.com',
};
