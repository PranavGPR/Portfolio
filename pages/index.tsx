import styled from "styled-components";
import Typography from "../components/Typography";
import { colors } from "../constants/colors";

const tagName = "< GPR />";

export default function Main() {
  return (
    <Container>
      <Hero>
        <Heading>
          <Typography variant='h5'>Hey There!</Typography>
          <Typography variant='h1'>I'm Pranav</Typography>
          <Typography variant='h4'>A Full Stack Developer</Typography>
        </Heading>

        <Tag>{tagName}</Tag>
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
  margin: 0 10rem;
`;

const Tag = styled.div`
  position: absolute;
  bottom: 4rem;
  right: 11rem;
  font-family: Dancing Script, sans-serif;
  font-size: 16rem;
  opacity: 0.1;
`;
