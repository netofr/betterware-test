import styled from 'styled-components/native';

export const ActionButton = styled.TouchableOpacity`
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.accentBorder};
  background-color: ${({ theme }) => theme.colors.accentBackground};
  padding-horizontal: 16px;
  padding-vertical: 12px;
  align-items: center;
`;

export const SecondaryActionButton = styled(ActionButton)`
  background-color: transparent;
`;

export const ActionButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 14px;
  font-weight: 600;
`;
