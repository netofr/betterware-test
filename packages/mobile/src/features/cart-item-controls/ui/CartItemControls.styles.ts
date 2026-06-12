import styled from 'styled-components/native';

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
