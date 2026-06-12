import styled from 'styled-components/native';

export const Section = styled.View`
  width: 100%;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
`;

export const ActionButton = styled.TouchableOpacity`
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  padding-horizontal: 16px;
  padding-vertical: 10px;
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
