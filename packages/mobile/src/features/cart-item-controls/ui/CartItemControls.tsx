import { decrementCartItem, incrementCartItem } from 'shared';

import { useAppDispatch } from '@/shared';

import {
  QuantityButton,
  QuantityButtonText,
  QuantityControls,
  QuantityText,
} from './CartItemControls.styles';

type CartItemControlsProps = {
  productId: string;
  productName: string;
  quantity: number;
};

export function CartItemControls({
  productId,
  productName,
  quantity,
}: CartItemControlsProps) {
  const dispatch = useAppDispatch();

  return (
    <QuantityControls>
      <QuantityButton
        accessibilityLabel={`Decrease quantity of ${productName}`}
        onPress={() => dispatch(decrementCartItem(productId))}
      >
        <QuantityButtonText>−</QuantityButtonText>
      </QuantityButton>
      <QuantityText>{quantity}</QuantityText>
      <QuantityButton
        accessibilityLabel={`Increase quantity of ${productName}`}
        onPress={() => dispatch(incrementCartItem(productId))}
      >
        <QuantityButtonText>+</QuantityButtonText>
      </QuantityButton>
    </QuantityControls>
  );
}
