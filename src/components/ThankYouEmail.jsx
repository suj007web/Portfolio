import React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Container,
  Preview,
  Section,
  Text,
  Button,
} from '@react-email/components';

export const ThankYouEmail = ({ name }) => (
  <Html>
    <Head />
    <Preview>Thank you for contacting Sujal Chauhan</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Thank You for Reaching Out!</Heading>
        <Text style={text}>
          Dear {name},
        </Text>
        <Text style={text}>
          I appreciate you contacting me. I&apos;ve received your message and will respond soon.
        </Text>
        <Section style={buttonContainer}>
          <Button
            pX={20}
            pY={12}
            style={button}
            href="https://sujalchauhan.in"
          >
            Visit My Portfolio
          </Button>
        </Section>
        <Text style={signature}>
          Best regards,<br />
          Sujal Chauhan
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ThankYouEmail;

// Styles
const main = {
  backgroundColor: '#f0f4f8',
  fontFamily: '"Helvetica Neue", Arial, sans-serif',
  padding: '10px 0',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 15px',
  maxWidth: '500px',
  borderRadius: '8px',
};

const h1 = {
  color: '#1a202c',
  fontSize: '24px',
  fontWeight: '700',
  lineHeight: '30px',
  textAlign: 'center',
  margin: '15px 0',
};

const text = {
  color: '#4a5568',
  fontSize: '14px',
  lineHeight: '20px',
  textAlign: 'left',
  margin: '0 0 15px',
};

const buttonContainer = {
  textAlign: 'center',
  margin: '20px 0',
};

const button = {
  backgroundColor: '#4299e1',
  borderRadius: '4px',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: 'bold',
  textDecoration: 'none',
  textAlign: 'center',
  display: 'inline-block',
  padding: '10px 20px',
};

const signature = {
  ...text,
  marginBottom: 0,
};