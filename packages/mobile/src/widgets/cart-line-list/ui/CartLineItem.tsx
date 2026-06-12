import type { CartLineItem } from 'shared';

import { CartItemControls } from '@/features/cart-item-controls';

import {
  LineItem,
  LineItemDetails,
  LineItemFooter,
  LineTotal,
  PlaceholderText,
  ProductImage,
  ProductImageContainer,
  ProductName,
  UnitPrice,
} from './CartLineList.styles';

type CartLineItemRowProps = {
  lineItem: CartLineItem;
};

export function CartLineItemRow({ lineItem }: CartLineItemRowProps) {
  const { product, quantity, lineTotal } = lineItem;

  return (
    <LineItem>
      <ProductImageContainer>
        {product.imageUrl ? (
          <ProductImage
            source={{ uri: product.imageUrl }}
            resizeMode="contain"
          />
        ) : (
          <PlaceholderText>No image</PlaceholderText>
        )}
      </ProductImageContainer>

      <LineItemDetails>
        <ProductName>{product.name}</ProductName>
        <UnitPrice>${product.price.toFixed(2)} each</UnitPrice>
      </LineItemDetails>

      <LineItemFooter>
        <CartItemControls
          productId={product.id}
          productName={product.name}
          quantity={quantity}
        />
        <LineTotal>${lineTotal.toFixed(2)}</LineTotal>
      </LineItemFooter>
    </LineItem>
  );
}
