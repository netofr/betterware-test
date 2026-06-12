import { addToCart } from 'shared';

import { useAppDispatch, useToast } from '@/shared';

import { Button, ButtonText } from './AddToCartButton.styles';

type AddToCartButtonProps = {
  productId: string;
  productName: string;
};

export function AddToCartButton({
  productId,
  productName,
}: AddToCartButtonProps) {
  const dispatch = useAppDispatch();
  const { showToast } = useToast();

  const handlePress = () => {
    dispatch(addToCart(productId));
    showToast(`${productName} added to cart`);
  };

  return (
    <Button onPress={handlePress} accessibilityLabel="Add to cart">
      <ButtonText>Add to cart</ButtonText>
    </Button>
  );
}
