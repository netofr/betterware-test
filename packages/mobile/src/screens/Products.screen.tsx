import {
  selectAllProducts,
  selectProductsCount,
  selectProductsError,
  selectProductsStatus,
  selectSelectedProduct,
  setSelectedProductId,
} from 'shared';
import styled from 'styled-components/native';

import { useAppDispatch, useAppSelector } from '../app/hooks';
import { ScreenLayout } from '../app/navigation';

const Section = styled.ScrollView`
  width: 100%;
`;

const ProductsTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textHeading};
  margin-bottom: 12px;
`;

interface ProductItemProps {
  $isSelected?: boolean;
}

const ProductItem = styled.TouchableOpacity<ProductItemProps>`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.textHeading : theme.colors.textMuted};
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: ${({ $isSelected, theme }) =>
    $isSelected ? theme.colors.textHeading : 'transparent'};
`;

const ProductName = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  flex: 1;
  margin-right: 8px;
`;

const ProductPrice = styled.Text`
  color: #e0e0e0;
  font-size: 14px;
`;

const StatusText = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13px;
  margin-top: 8px;
`;

export function ProductsScreen() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectAllProducts);
  const productsCount = useAppSelector(selectProductsCount);
  const productsStatus = useAppSelector(selectProductsStatus);
  const productsError = useAppSelector(selectProductsError);
  const selectedProduct = useAppSelector(selectSelectedProduct);

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
          <ProductItem
            key={product.id}
            $isSelected={selectedProduct?.id === product.id}
            onPress={() => dispatch(setSelectedProductId(product.id))}
          >
            <ProductName>{product.name}</ProductName>
            <ProductPrice>${product.price.toFixed(2)}</ProductPrice>
          </ProductItem>
        ))}
        {selectedProduct ? (
          <StatusText>{selectedProduct.description}</StatusText>
        ) : null}
      </Section>
    </ScreenLayout>
  );
}
