import {
  ActionButton,
  ActionButtonText,
  SecondaryActionButton,
} from './CheckoutActions.styles';

type CheckoutActionsProps = {
  onCompletePurchase: () => void;
  onBackToCart: () => void;
};

export function CheckoutActions({
  onCompletePurchase,
  onBackToCart,
}: CheckoutActionsProps) {
  return (
    <>
      <ActionButton onPress={onCompletePurchase}>
        <ActionButtonText>Complete purchase</ActionButtonText>
      </ActionButton>

      <SecondaryActionButton onPress={onBackToCart}>
        <ActionButtonText>Back to cart</ActionButtonText>
      </SecondaryActionButton>
    </>
  );
}
