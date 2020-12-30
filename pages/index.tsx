import styled from "styled-components";
import Typography from "../components/Typography";
import { colors } from "../constants/colors";

const tagName = "< GPR />";

export default function Main() {
  return (
    <Container>
      <Hero>
        <Heading>
          <Typography variant='h6'>Hey There!</Typography>
          <Typography variant='h1'>
            I'm <Name style={{ color: `${colors.primary}` }}>Pranav</Name>
          </Typography>
          <Typography variant='h4'>A Full Stack Developer.</Typography>
        </Heading>

        <Tag role='img'>{tagName}</Tag>
      </Hero>
    </Container>
  );
}

const Container = styled.div`
  color: ${colors.textcolor};
`;

const Hero = styled.div`
  min-height: 100vh;
  background-color: ${colors.primarybg};
  display: flex;
  align-items: center;
`;

const Heading = styled.div`
  margin-left: 12rem;
  line-height: 6.5rem;
`;

const Tag = styled.div`
  position: absolute;
  bottom: 4rem;
  right: 11rem;
  font-family: Dancing Script, sans-serif;
  font-weight: 300;
  letter-spacing: 0.05rem;
  font-size: 16rem;
  opacity: 0.1;
`;

const Name = styled.span`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 7rem;
    left: calc(0% + 0.5rem);
    width: calc(100% - 1rem);
    border: 2px solid ${colors.primary};
    background-color: ${colors.primary};
    border-radius: 10px;
  }
`;
