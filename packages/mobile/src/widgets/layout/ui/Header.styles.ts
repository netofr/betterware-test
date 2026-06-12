import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.surface};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.border};
  padding-horizontal: ${({ theme }) => theme.spacing.lg}px;
  padding-vertical: ${({ theme }) => theme.spacing.md}px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const BrandText = styled.Text`
  font-size: ${({ theme }) => theme.typography.brand}px;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  color: ${({ theme }) => theme.colors.textHeading};
  letter-spacing: -0.3px;
`;
