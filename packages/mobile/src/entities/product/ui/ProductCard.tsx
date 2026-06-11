import { useAppNavigation } from '../../../app/navigation';
import { AddToCartButton } from '../../../features/add-to-cart';

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
};

export function ProductCard({
  id,
  name,
  price,
  category,
  imageUrl,
}: ProductCardProps) {
  const navigation = useAppNavigation();

  const handleViewDetails = () => {
    navigation.navigate('ProductDetail', { productId: id });
  };

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
          <AddToCartButton productId={id} productName={name} />
          <ViewDetailsButton onPress={handleViewDetails}>
            <ViewDetailsButtonText>View details</ViewDetailsButtonText>
          </ViewDetailsButton>
        </Actions>
      </Content>
    </Card>
  );
}
