import { Image } from 'react-native';
import styled from 'styled-components/native';

export const LineItem = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  padding: 12px;
  margin-bottom: 12px;
`;

export const ProductImageContainer = styled.View`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.border};
  align-items: center;
  justify-content: center;
  padding: 4px;
`;

export const ProductImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const PlaceholderText = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 12px;
`;

export const LineItemDetails = styled.View`
  flex: 1;
  gap: 4px;
`;

export const ProductName = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 16px;
  font-weight: 600;
`;

export const UnitPrice = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13px;
`;

export const LineItemFooter = styled.View`
  align-items: flex-end;
  gap: 8px;
`;

export const LineTotal = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 16px;
  font-weight: 600;
`;
