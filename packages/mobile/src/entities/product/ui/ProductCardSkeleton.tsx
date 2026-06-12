import { Skeleton } from '@/shared/ui';

import {
  Actions,
  Card,
  Content,
  ImageContainer,
} from './ProductCardSkeleton.styles';

function ProductCardSkeleton() {
  return (
    <Card
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
    >
      <ImageContainer>
        <Skeleton fill />
      </ImageContainer>

      <Content>
        <Skeleton height={12} widthPercent={25} />
        <Skeleton height={16} widthPercent={75} />
        <Skeleton height={18} widthPercent={30} />

        <Actions>
          <Skeleton height={40} />
          <Skeleton height={40} />
        </Actions>
      </Content>
    </Card>
  );
}

export { ProductCardSkeleton };
