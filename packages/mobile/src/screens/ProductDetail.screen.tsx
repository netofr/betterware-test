import { selectProductById } from 'shared';

import { useAppSelector } from '../app/hooks';
import { ScreenLayout, useAppNavigation, useAppRoute } from '../app/navigation';
import { AddToCartButton } from '../features/add-to-cart';

import {
  Actions,
  BackButton,
  BackButtonText,
  Category,
  Description,
  Details,
  ImageContainer,
  Name,
  PlaceholderText,
  Price,
  ProductImage,
  Section,
} from './ProductDetail.screen.styles';

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
