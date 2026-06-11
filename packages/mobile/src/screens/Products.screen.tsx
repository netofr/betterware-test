import {
  fetchProducts,
  selectAllProducts,
  selectProductsCount,
  selectProductsError,
  selectProductsStatus,
} from 'shared';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { ScreenLayout } from '../app/navigation';
import { ProductCard } from '../entities/product';
import { ProductCardSkeleton } from '../shared/ui';

import {
  ErrorContainer,
  ErrorContent,
  ErrorMessage,
  ErrorTitle,
  ProductsTitle,
  RetryButton,
  RetryButtonText,
  Section,
} from './Products.screen.styles';

const SKELETON_COUNT = 6;

export function ProductsScreen() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectAllProducts);
  const productsCount = useAppSelector(selectProductsCount);
  const productsStatus = useAppSelector(selectProductsStatus);
  const productsError = useAppSelector(selectProductsError);

  const handleRetry = () => {
    dispatch(fetchProducts());
  };

  return (
    <ScreenLayout title="Products" description="Products list">
      <Section>
        <ProductsTitle>Products ({productsCount})</ProductsTitle>
        {productsStatus === 'failed' && productsError ? (
          <ErrorContainer>
            <ErrorContent>
              <ErrorTitle>Error Loading Products...</ErrorTitle>
              <ErrorMessage>{productsError}</ErrorMessage>
            </ErrorContent>
            <RetryButton
              onPress={handleRetry}
              accessibilityRole="button"
              accessibilityLabel="Try again"
            >
              <RetryButtonText>Try Again</RetryButtonText>
            </RetryButton>
          </ErrorContainer>
        ) : null}
        {productsStatus === 'loading'
          ? Array.from({ length: SKELETON_COUNT }, (_, index) => (
              <ProductCardSkeleton key={`product-skeleton-${index}`} />
            ))
          : products.map(product => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                price={product.price}
                category={product.category}
                imageUrl={product.imageUrl}
              />
            ))}
      </Section>
    </ScreenLayout>
  );
}
