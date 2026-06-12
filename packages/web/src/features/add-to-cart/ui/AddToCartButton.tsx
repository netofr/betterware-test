import { addToCart } from 'shared';

import { useAppDispatch, useToast } from '@/shared';

type AddToCartButtonProps = {
  productId: string;
  productName: string;
  className?: string;
};

const defaultClassName =
  'cursor-pointer rounded-md border border-accent-border bg-accent-bg px-4 py-2 text-sm font-medium text-text-h transition-colors hover:bg-accent hover:text-white';

export function AddToCartButton({
  productId,
  productName,
  className = defaultClassName,
}: AddToCartButtonProps) {
  const dispatch = useAppDispatch();
  const { showToast } = useToast();

  const handleClick = () => {
    dispatch(addToCart(productId));
    showToast(`${productName} added to cart`);
  };

  return (
    <button type="button" className={className} onClick={handleClick}>
      Add to cart
    </button>
  );
}
