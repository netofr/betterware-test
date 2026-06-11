import {
  selectAllProducts,
  selectProductsCount,
  selectProductsError,
  selectProductsStatus,
} from 'shared';
import styled from 'styled-components/native';

import { useAppSelector } from '../app/hooks';
import { ScreenLayout } from '../app/navigation';
import { ProductCard } from '../entities/product';

const Section = styled.View`
  width: 100%;
`;

const ProductsTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textHeading};
  margin-bottom: 12px;
`;

const StatusText = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13px;
  margin-top: 8px;
`;

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
