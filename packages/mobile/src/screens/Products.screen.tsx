import {
  selectAllProducts,
  selectProductsCount,
  selectProductsError,
  selectProductsStatus,
} from 'shared';

import { useAppSelector } from '../app/hooks';
import { ScreenLayout } from '../app/navigation';
import { ProductCard } from '../entities/product';
import { ProductCardSkeleton } from '../shared/ui';

import { ProductsTitle, Section, StatusText } from './Products.screen.styles';

const SKELETON_COUNT = 6;

export function ProductsScreen() {
  const products = useAppSelector(selectAllProducts);
  const productsCount = useAppSelector(selectProductsCount);
  const productsStatus = useAppSelector(selectProductsStatus);
  const productsError = useAppSelector(selectProductsError);

  return (
    <ScreenLayout title="Products" description="Products list">
      <Section>
        <ProductsTitle>Products ({productsCount})</ProductsTitle>
        {productsStatus === 'failed' && productsError ? (
          <StatusText>{productsError}</StatusText>
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
