import { Image } from 'react-native';
import styled from 'styled-components/native';

export const Section = styled.View`
  width: 100%;
  gap: 16px;
`;

export const ImageContainer = styled.View`
  width: 100%;
  aspect-ratio: 1;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.border};
  padding: 24px;
`;

export const ProductImage = styled(Image)`
  width: 100%;
  height: 100%;
`;

export const Details = styled.View`
  gap: 12px;
`;

export const Category = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 24px;
  font-weight: 600;
`;

export const Price = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 24px;
  font-weight: 700;
`;

export const Description = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
  line-height: 20px;
`;

export const PlaceholderText = styled.Text`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 14px;
`;

export const Actions = styled.View`
  gap: 8px;
  align-self: flex-start;
`;

export const BackButton = styled.TouchableOpacity`
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  padding-horizontal: 16px;
  padding-vertical: 10px;
  align-self: flex-start;
`;

export const BackButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.textHeading};
  font-size: 14px;
  font-weight: 600;
`;
