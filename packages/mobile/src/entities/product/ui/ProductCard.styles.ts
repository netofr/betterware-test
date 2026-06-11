import { Image } from 'react-native';
import styled from 'styled-components/native';

export const Card = styled.View`
  width: 100%;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.background};
  overflow: hidden;
  margin-bottom: 12px;
`;

export const ImageContainer = styled.View`
  width: 100%;
  aspect-ratio: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.border};
  padding: 16px;
`;

export const ProductImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const PlaceholderText = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
`;

export const Content = styled.View`
  padding: 16px;
  gap: 8px;
`;

export const Category = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 16px;
  font-weight: 600;
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 18px;
  font-weight: 700;
`;

export const Actions = styled.View`
  margin-top: 8px;
  gap: 8px;
`;

export const ViewDetailsButton = styled.TouchableOpacity`
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  padding-horizontal: 16px;
  padding-vertical: 10px;
  align-items: center;
`;

export const ViewDetailsButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 14px;
  font-weight: 600;
`;
