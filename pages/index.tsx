import Head from "next/head";
import styled from "styled-components";
import { colors } from "../constants/colors";

export default function Home() {
  return (
    <Container>
      <h1>Hello</h1>
    </Container>
  );
}

const Container = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primarybg};
`;

const Main = styled.main``;
