import { type FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  clearCart,
  selectCartItemsCount,
  selectCartTotalAmount,
} from 'shared';

import { useAppDispatch, useAppSelector } from '@/shared';

import {
  initialPaymentFormData,
  type CompletedOrder,
  type PaymentFormData,
} from './types';

export function useCheckout() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const itemsCount = useAppSelector(selectCartItemsCount);
  const totalAmount = useAppSelector(selectCartTotalAmount);
  const [formData, setFormData] = useState<PaymentFormData>(initialPaymentFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<CompletedOrder | null>(
    null,
  );

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
    navigate('/products', { replace: true });
  };

  return {
    formData,
    updateField,
    isSubmitting,
    showSuccessModal,
    completedOrder,
    handleSubmit,
    handleCloseSuccessModal,
  };
}
