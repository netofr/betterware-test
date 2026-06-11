import { ScreenLayout } from '../app/navigation';

import { Heading, Section } from './Home.screen.styles';

export function HomeScreen() {
  return (
    <ScreenLayout title="Home" description="Betterware Home Screen">
      <Section>
        <Heading>This is just the home screen...</Heading>
      </Section>
    </ScreenLayout>
  );
}
