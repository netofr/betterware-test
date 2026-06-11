/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { Provider } from 'react-redux';
import {
  MOCK_PRODUCTS,
  selectAllProducts,
  selectProductsCount,
  selectSelectedProduct,
  setProducts,
  setSelectedProductId,
} from 'shared';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { useAppDispatch, useAppSelector } from './src/app/hooks';
import { store } from './src/app/store';

// Create a styled View using standard CSS syntax
const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 20px;
`;

const BrandContainer = styled.View`
  align-items: center;
  margin-top: 80px;
`;

const TitleText = styled.Text`
  font-size: 24px;
  color: #111810;
  font-weight: bold;
  margin-left: 10px;
  margin-right: 10px;
`;

const SubTitleText = styled.Text`
  font-size: 16px;
  color: #20211a;
  text-align: center;
`;

const ProductsSection = styled.View`
  width: 100%;
  margin-top: 24px;
  padding-horizontal: 8px;
`;

const ProductsTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 12px;
  text-align: center;
`;

interface ProductItemProps {
  $isSelected?: boolean;
}

const ProductItem = styled.TouchableOpacity<ProductItemProps>`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ $isSelected }) =>
    $isSelected ? '#000000' : '#4a4a4a'};
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: ${({ $isSelected }) =>
    $isSelected ? '#000000' : 'transparent'};
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

const SelectedProductText = styled.Text`
  color: #484547;
  font-size: 13px;
  text-align: center;
  margin-top: 8px;
`;

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
        <AppContent />
      </SafeAreaProvider>
    </Provider>
  );
}

function AppContent() {
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectAllProducts);
  const productsCount = useAppSelector(selectProductsCount);
  const selectedProduct = useAppSelector(selectSelectedProduct);

  useEffect(() => {
    dispatch(setProducts(MOCK_PRODUCTS));
  }, [dispatch]);

  return (
    <Container>
      {/* Top Logo / Brand Section */}
      <BrandContainer>
        <TitleText>Betterware App</TitleText>
        <SubTitleText>Mini e-commerce</SubTitleText>

        <ProductsSection>
          <ProductsTitle>Products ({productsCount})</ProductsTitle>
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
            <SelectedProductText>
              {selectedProduct.description}
            </SelectedProductText>
          ) : null}
        </ProductsSection>
      </BrandContainer>
    </Container>
  );
}

export default App;
