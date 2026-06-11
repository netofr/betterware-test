import styled from 'styled-components/native';

interface TabItemProps {
  $isActive?: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.surface};
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.border};
  padding-top: ${({ theme }) => theme.spacing.sm}px;
  padding-bottom: ${({ theme }) => theme.spacing.sm}px;
`;

export const TabItem = styled.Pressable<TabItemProps>`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-vertical: ${({ theme }) => theme.spacing.sm}px;
  min-height: 44px;
`;

export const TabItemContent = styled.View<TabItemProps>`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs + 2}px;
  padding-horizontal: ${({ theme }) => theme.spacing.sm + 4}px;
  padding-vertical: ${({ theme }) => theme.spacing.xs}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.accentBackground : 'transparent'};
`;

export const TabLabel = styled.Text<TabItemProps>`
  font-size: ${({ theme }) => theme.typography.body}px;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.textHeading : theme.colors.text};
`;

export const CartBadge = styled.View`
  min-width: 20px;
  min-height: 20px;
  padding-horizontal: ${({ theme }) => theme.spacing.xs + 2}px;
  border-radius: ${({ theme }) => theme.borderRadius.full}px;
  background-color: ${({ theme }) => theme.colors.accent};
  align-items: center;
  justify-content: center;
`;

export const CartBadgeText = styled.Text`
  font-size: ${({ theme }) => theme.typography.small}px;
  font-weight: ${({ theme }) => theme.typography.weights.semibold};
  color: ${({ theme }) => theme.colors.onAccent};
`;
