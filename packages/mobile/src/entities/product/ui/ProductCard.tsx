import type { ReactNode } from 'react';

import {
  Actions,
  Card,
  Category,
  Content,
  ImageContainer,
  Name,
  PlaceholderText,
  Price,
  ProductImage,
  ViewDetailsButton,
  ViewDetailsButtonText,
} from './ProductCard.styles';

export type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl?: string;
  actions?: ReactNode;
  onViewDetailsPress?: () => void;
};

export function ProductCard({
  name,
  price,
  category,
  imageUrl,
  actions,
  onViewDetailsPress,
}: ProductCardProps) {
  return (
    <Card>
      <ImageContainer>
        {imageUrl ? (
          <ProductImage source={{ uri: imageUrl }} resizeMode="contain" />
        ) : (
          <PlaceholderText>No image</PlaceholderText>
        )}
      </ImageContainer>

      <Content>
        <Category>{category}</Category>
        <Name>{name}</Name>
        <Price>${price.toFixed(2)}</Price>

        <Actions>
          {actions}
          {onViewDetailsPress ? (
            <ViewDetailsButton onPress={onViewDetailsPress}>
              <ViewDetailsButtonText>View details</ViewDetailsButtonText>
            </ViewDetailsButton>
          ) : null}
        </Actions>
      </Content>
    </Card>
  );
}
