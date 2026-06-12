import { decrementCartItem, incrementCartItem } from 'shared';

import { useAppDispatch } from '@/shared';

type CartItemControlsProps = {
  productId: string;
  productName: string;
  quantity: number;
};

const controlButtonClassName =
  'flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border border-border text-text-h transition-colors hover:bg-code-bg';

export function CartItemControls({
  productId,
  productName,
  quantity,
}: CartItemControlsProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        aria-label={`Decrease quantity of ${productName}`}
        className={controlButtonClassName}
        onClick={() => dispatch(decrementCartItem(productId))}
      >
        −
      </button>
      <span className="min-w-8 text-center text-sm font-medium text-text-h">
        {quantity}
      </span>
      <button
        type="button"
        aria-label={`Increase quantity of ${productName}`}
        className={controlButtonClassName}
        onClick={() => dispatch(incrementCartItem(productId))}
      >
        +
      </button>
    </div>
  );
}
