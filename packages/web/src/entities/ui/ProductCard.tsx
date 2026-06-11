import { addToCart } from "shared";
import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "../../app/hooks";
import { useToast } from "../../app/useToast";

export type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl?: string;
};

export function ProductCard({
  id,
  name,
  price,
  category,
  imageUrl,
}: ProductCardProps) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { showToast } = useToast();

  const handleAddToCart = () => {
    dispatch(addToCart(id));
    showToast(`${name} added to cart`);
  };

  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-border bg-bg text-left shadow-[var(--shadow)]">
      <div className="flex aspect-square items-center justify-center bg-code-bg p-4">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <span className="text-sm text-text">No image</span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <p className="text-xs uppercase tracking-wide text-text">{category}</p>
        <h3 className="text-base font-medium text-text-h">{name}</h3>
        <p className="text-lg font-semibold text-text-h">
          ${price.toFixed(2)}
        </p>

        <div className="mt-auto flex flex-col gap-2">
          <button
            type="button"
            className="cursor-pointer rounded-md border border-accent-border bg-accent-bg px-4 py-2 text-sm font-medium text-text-h transition-colors hover:bg-accent hover:text-white"
            onClick={handleAddToCart}
          >
            Add to cart
          </button>
          <button
            type="button"
            className="cursor-pointer rounded-md border border-border px-4 py-2 text-sm font-medium text-text-h transition-colors hover:bg-code-bg"
            onClick={() => navigate(`/products/${id}`)}
          >
            View details
          </button>
        </div>
      </div>
    </article>
  );
}
