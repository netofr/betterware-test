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
