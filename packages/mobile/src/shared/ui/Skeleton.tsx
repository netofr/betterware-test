import { useEffect, useRef } from 'react';
import { Animated } from 'react-native';

import { SkeletonBlock } from './Skeleton.styles';

type SkeletonProps = {
  fill?: boolean;
  height?: number;
  widthPercent?: number;
};

function Skeleton({ fill, height, widthPercent }: SkeletonProps) {
  const opacity = useRef(new Animated.Value(0.4)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.4,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, [opacity]);

  return (
    <SkeletonBlock
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
      fill={fill}
      height={height}
      widthPercent={widthPercent}
      style={{ opacity }}
    />
  );
}

export { Skeleton };
