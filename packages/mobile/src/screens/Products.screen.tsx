import {
  selectAllProducts,
  selectProductsCount,
  selectProductsError,
  selectProductsStatus,
} from 'shared';

import { useAppSelector } from '../app/hooks';
import { ScreenLayout } from '../app/navigation';
import { ProductCard } from '../entities/product';

import { ProductsTitle, Section, StatusText } from './Products.screen.styles';

export function ProductsScreen() {
  const products = useAppSelector(selectAllProducts);
  const productsCount = useAppSelector(selectProductsCount);
  const productsStatus = useAppSelector(selectProductsStatus);
  const productsError = useAppSelector(selectProductsError);

  return (
    <ScreenLayout title="Products" description="Products list">
      <Section>
        <ProductsTitle>Products ({productsCount})</ProductsTitle>
        {productsStatus === 'loading' ? (
          <StatusText>Loading products…</StatusText>
        ) : null}
        {productsStatus === 'failed' && productsError ? (
          <StatusText>{productsError}</StatusText>
        ) : null}
        {products.map(product => (
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
