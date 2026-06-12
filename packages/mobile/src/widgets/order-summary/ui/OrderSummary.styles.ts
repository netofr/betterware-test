import styled from 'styled-components/native';

export const CardContainer = styled.View`
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  padding: 16px;
`;

export const FooterContainer = styled.View`
  margin-top: 16px;
  padding-top: 16px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.border};
  align-items: flex-end;
  gap: 8px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
`;

export const Text = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
`;

export const TotalHeading = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 16px;
  font-weight: 600;
`;

export const LineItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 12px;
  margin-bottom: 12px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.border};
`;

export const TotalsSection = styled.View`
  gap: 8px;
  margin-top: 4px;
  padding-top: 12px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.border};
`;

export const Actions = styled.View`
  flex-direction: row;
  gap: 8px;
  margin-top: 8px;
`;
