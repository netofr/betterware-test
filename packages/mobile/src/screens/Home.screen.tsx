import styled from 'styled-components/native';

import { ScreenLayout } from '../app/navigation';

const Section = styled.View`
  width: 100%;
`;

const Heading = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textHeading};
`;

export function HomeScreen() {
  return (
    <ScreenLayout title="Home" description="Betterware Home Page">
      <Section>
        <Heading>This is just the home screen...</Heading>
      </Section>
    </ScreenLayout>
  );
}
