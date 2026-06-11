import { Image } from 'react-native';
import styled from 'styled-components/native';

export const Section = styled.View`
  width: 100%;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
`;

export const Heading = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 16px;
  font-weight: 600;
`;

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

export const LineItemDetails = styled.View`
  flex: 1;
  gap: 4px;
`;

export const UnitPrice = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13px;
`;

export const LineItemFooter = styled.View`
  align-items: flex-end;
  gap: 8px;
`;

export const QuantityControls = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const QuantityButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  align-items: center;
  justify-content: center;
`;

export const QuantityButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 18px;
  font-weight: 600;
`;

export const QuantityText = styled.Text`
  min-width: 24px;
  text-align: center;
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 14px;
  font-weight: 600;
`;

export const LineTotal = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 16px;
  font-weight: 600;
`;

export const Summary = styled.View`
  margin-top: 16px;
  padding-top: 16px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.border};
  align-items: flex-end;
  gap: 8px;
`;

export const ActionButton = styled.TouchableOpacity`
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  padding-horizontal: 16px;
  padding-vertical: 10px;
  margin-top: 8px;
`;

export const PrimaryActionButton = styled(ActionButton)`
  border-color: ${({ theme }) => theme.colors.accentBorder};
  background-color: ${({ theme }) => theme.colors.accentBackground};
`;

export const ActionButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 14px;
  font-weight: 500;
`;

export const Actions = styled.View`
  flex-direction: row;
  gap: 8px;
  margin-top: 8px;
`;
