import { Image } from 'react-native';
import { selectProductById } from 'shared';
import styled from 'styled-components/native';

import { useAppSelector } from '../app/hooks';
import { ScreenLayout, useAppNavigation, useAppRoute } from '../app/navigation';
import { AddToCartButton } from '../features/add-to-cart';

const Section = styled.View`
  width: 100%;
  gap: 16px;
`;

const ImageContainer = styled.View`
  width: 100%;
  aspect-ratio: 1;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.border};
  padding: 24px;
`;

const ProductImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

const Details = styled.View`
  gap: 12px;
`;

const Category = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const Name = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 24px;
  font-weight: 600;
`;

const Price = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 24px;
  font-weight: 700;
`;

const Description = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  line-height: 20px;
`;

const PlaceholderText = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
`;

const Actions = styled.View`
  gap: 8px;
  align-self: flex-start;
`;

const BackButton = styled.TouchableOpacity`
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  padding-horizontal: 16px;
  padding-vertical: 10px;
  align-self: flex-start;
`;

const BackButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 14px;
  font-weight: 600;
`;

export function ProductDetailScreen() {
  const navigation = useAppNavigation();
  const route = useAppRoute<'ProductDetail'>();
  const product = useAppSelector(state =>
    selectProductById(state, route.params.productId),
  );

  return (
    <ScreenLayout
      title="Product details"
      description="Full product information"
    >
      <Section>
        {!product ? (
          <>
            <PlaceholderText>Product not found.</PlaceholderText>
            <BackButton onPress={() => navigation.navigate('Products')}>
              <BackButtonText>Back to products</BackButtonText>
            </BackButton>
          </>
        ) : (
          <>
            <ImageContainer>
              {product.imageUrl ? (
                <ProductImage
                  source={{ uri: product.imageUrl }}
                  resizeMode="contain"
                />
              ) : (
                <PlaceholderText>No image</PlaceholderText>
              )}
            </ImageContainer>

            <Details>
              <Category>{product.category}</Category>
              <Name>{product.name}</Name>
              <Price>${product.price.toFixed(2)}</Price>
              <Description>{product.description}</Description>
            </Details>

            <Actions>
              <AddToCartButton
                productId={product.id}
                productName={product.name}
              />
              <BackButton onPress={() => navigation.navigate('Products')}>
                <BackButtonText>Back to products</BackButtonText>
              </BackButton>
            </Actions>
          </>
        )}
      </Section>
    </ScreenLayout>
  );
}
