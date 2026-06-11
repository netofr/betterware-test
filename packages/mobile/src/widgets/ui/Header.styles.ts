import styled from 'styled-components/native';

interface NavItemProps {
  $isActive?: boolean;
}

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

export const Nav = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs}px;
`;

export const NavItem = styled.Pressable<NavItemProps>`
  padding-horizontal: ${({ theme }) => theme.spacing.sm + 4}px;
  padding-vertical: ${({ theme }) => theme.spacing.sm}px;
  border-radius: ${({ theme }) => theme.borderRadius.md}px;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.accentBackground : 'transparent'};
`;

export const NavItemText = styled.Text<NavItemProps>`
  font-size: ${({ theme }) => theme.typography.body}px;
  font-weight: ${({ theme }) => theme.typography.weights.medium};
  color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.textHeading : theme.colors.text};
`;

export const NavItemContent = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xs + 2}px;
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
