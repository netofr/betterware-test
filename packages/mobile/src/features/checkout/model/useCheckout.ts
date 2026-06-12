import { useEffect, useState } from 'react';
import { clearCart, selectCartLineItems } from 'shared';

import { useAppDispatch, useAppNavigation, useAppSelector } from '@/shared';

export function useCheckout() {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const lineItems = useAppSelector(selectCartLineItems);
  const [hasCompletedPurchase, setHasCompletedPurchase] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

  useEffect(() => {
    if (lineItems.length === 0 && !hasCompletedPurchase) {
      navigation.navigate('Cart');
    }
  }, [hasCompletedPurchase, lineItems.length, navigation]);

  const handleCompletePurchase = () => {
    dispatch(clearCart());
    setHasCompletedPurchase(true);
    setIsSuccessModalVisible(true);
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessModalVisible(false);
    navigation.navigate('Products');
  };

  const shouldRedirect = lineItems.length === 0 && !hasCompletedPurchase;

  return {
    isSuccessModalVisible,
    handleCompletePurchase,
    handleCloseSuccessModal,
    shouldRedirect,
  };
}
