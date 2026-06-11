import { addToCart } from 'shared';
import styled from 'styled-components/native';

import { useAppDispatch } from '../../../app/hooks';
import { useToast } from '../../../shared/ui';

type AddToCartButtonProps = {
  productId: string;
  productName: string;
};

const Button = styled.TouchableOpacity`
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.accentBorder};
  background-color: ${({ theme }) => theme.colors.accentBackground};
  padding-horizontal: 16px;
  padding-vertical: 10px;
  align-items: center;
`;

const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 14px;
  font-weight: 600;
`;

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
