import styled from 'styled-components/native';

export const Container = styled.View`
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.border};
  padding-horizontal: ${({ theme }) => theme.spacing.lg}px;
  padding-vertical: ${({ theme }) => theme.spacing.lg}px;
  background-color: ${({ theme }) => theme.colors.surface};
`;

export const Content = styled.View`
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md}px;
`;

export const CopyrightText = styled.Text`
  font-size: ${({ theme }) => theme.typography.body}px;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
`;

export const Nav = styled.View`
  flex-direction: row;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md}px;
`;

export const NavLink = styled.Pressable`
  padding-vertical: ${({ theme }) => theme.spacing.xs}px;
`;

export const NavLinkText = styled.Text`
  font-size: ${({ theme }) => theme.typography.body}px;
  color: ${({ theme }) => theme.colors.text};
`;
