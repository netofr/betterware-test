import styled from 'styled-components/native';

export const Section = styled.View`
  width: 100%;
  gap: 16px;
`;

export const Card = styled.View`
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  padding: 16px;
`;

export const Heading = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
`;

export const LineItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.border};
`;

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

export const ModalOverlay = styled.Pressable`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 24px;
`;

export const ModalCard = styled.View`
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  padding: 24px;
`;

export const ModalMessage = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  margin-bottom: 24px;
`;
