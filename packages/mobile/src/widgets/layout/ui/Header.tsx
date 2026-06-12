import { BrandText, Container, Row } from './Header.styles';

export function Header() {
  return (
    <Container accessibilityRole="header">
      <Row>
        <BrandText accessibilityRole="text">Betterware</BrandText>
      </Row>
    </Container>
  );
}
