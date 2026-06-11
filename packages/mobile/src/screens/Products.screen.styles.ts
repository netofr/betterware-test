import styled from 'styled-components/native';

export const Section = styled.View`
  width: 100%;
`;

export const ProductsTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textHeading};
  margin-bottom: 12px;
`;

export const StatusText = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 13px;
  margin-top: 8px;
`;

export const ErrorContainer = styled.View`
  margin-top: 24px;
  gap: 16px;
`;

export const ErrorContent = styled.View`
  gap: 8px;
`;

export const ErrorTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textHeading};
`;

export const ErrorMessage = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
`;

export const RetryButton = styled.TouchableOpacity`
  align-self: flex-start;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.accentBorder};
  background-color: ${({ theme }) => theme.colors.accentBackground};
  padding-horizontal: 16px;
  padding-vertical: 10px;
  min-height: 44px;
  justify-content: center;
`;

export const RetryButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 14px;
  font-weight: 600;
`;
