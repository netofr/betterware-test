import { Animated } from 'react-native';
import styled from 'styled-components/native';

type SkeletonBlockProps = {
  fill?: boolean;
  height?: number;
  widthPercent?: number;
};

export const SkeletonBlock = styled(Animated.View)<SkeletonBlockProps>`
  border-radius: ${({ theme }) => theme.borderRadius.sm}px;
  background-color: ${({ theme }) => theme.colors.border};
  ${({ fill, height = 12, widthPercent = 100 }) =>
    fill
      ? `
    width: 100%;
    height: 100%;
  `
      : `
    height: ${height}px;
    width: ${widthPercent}%;
  `}
`;
