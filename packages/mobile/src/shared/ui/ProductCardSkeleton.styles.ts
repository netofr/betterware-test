import styled from 'styled-components/native';

export const Card = styled.View`
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  overflow: hidden;
  margin-bottom: 12px;
`;

export const ImageContainer = styled.View`
  width: 100%;
  aspect-ratio: 1;
  background-color: ${({ theme }) => theme.colors.border};
`;

export const Content = styled.View`
  padding: ${({ theme }) => theme.spacing.md}px;
  gap: ${({ theme }) => theme.spacing.sm}px;
`;

export const Actions = styled.View`
  margin-top: ${({ theme }) => theme.spacing.sm}px;
  gap: ${({ theme }) => theme.spacing.sm}px;
`;
