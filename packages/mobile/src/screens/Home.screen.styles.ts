import styled from 'styled-components/native';

export const Section = styled.View`
  width: 100%;
`;

export const Heading = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textHeading};
`;
