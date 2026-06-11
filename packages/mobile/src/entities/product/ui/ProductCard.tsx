import { Image } from 'react-native';
import styled from 'styled-components/native';

import { useAppNavigation } from '../../../app/navigation';
import { AddToCartButton } from '../../../features/add-to-cart';

export type ProductCardProps = {
  id: string;
  name: string;
  price: number;
  category: string;
  imageUrl?: string;
};

const Card = styled.View`
  width: 100%;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  overflow: hidden;
  margin-bottom: 12px;
`;

const ImageContainer = styled.View`
  width: 100%;
  aspect-ratio: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.border};
  padding: 16px;
`;

const ProductImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const PlaceholderText = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
`;

const Content = styled.View`
  padding: 16px;
  gap: 8px;
`;

const Category = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Name = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 16px;
  font-weight: 600;
`;

const Price = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 18px;
  font-weight: 700;
`;

const Actions = styled.View`
  margin-top: 8px;
  gap: 8px;
`;

const ViewDetailsButton = styled.TouchableOpacity`
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  padding-horizontal: 16px;
  padding-vertical: 10px;
  align-items: center;
`;

const ViewDetailsButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 14px;
  font-weight: 600;
`;

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
          <AddToCartButton productId={id} />
          <ViewDetailsButton onPress={handleViewDetails}>
            <ViewDetailsButtonText>View details</ViewDetailsButtonText>
          </ViewDetailsButton>
        </Actions>
      </Content>
    </Card>
  );
}
