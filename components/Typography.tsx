import { CSSProperties, ReactNode } from "react";
import styled from "styled-components";

type Props = {
  variant: string;
  children: ReactNode;
  style?: CSSProperties;
};

export default function Typography({ variant, children, style }: Props) {
  let typography = <p></p>;
  switch (variant) {
    case "brand":
      typography = <Brand style={style}>{children}</Brand>;
      break;

    case "h1":
      typography = <Heading1 style={style}>{children}</Heading1>;
      break;

    case "h2":
      typography = <Heading2 style={style}>{children}</Heading2>;
      break;

    case "h3":
      typography = <Heading3 style={style}>{children}</Heading3>;
      break;

    case "h4":
      typography = <Heading4 style={style}>{children}</Heading4>;
      break;

    case "h5":
      typography = <Heading5 style={style}>{children}</Heading5>;
      break;

    case "h6":
      typography = <Heading6 style={style}>{children}</Heading6>;
      break;

    case "description":
      typography = <Description style={style}>{children}</Description>;
      break;

    default:
      typography = <p>{children}</p>;
  }
  return typography;
}

const Brand = styled.h1`
  position: absolute;
  bottom: 4rem;
  right: 11rem;
  font-family: Dancing Script, sans-serif;
  font-weight: 300;
  letter-spacing: 0.05rem;
  font-size: 16rem;
  opacity: 0.1;
`;

const Heading1 = styled.h1`
  font-size: 6rem;

  @media (max-width: 600px) {
    font-size: 5rem;
  }
`;

const Heading2 = styled.h2`
  font-size: 4.2rem;

  @media (max-width: 600px) {
    font-size: 3.7rem;
  }
`;

const Heading3 = styled.h3`
  font-size: 3.5rem;
  @media (max-width: 600px) {
    font-size: 3.2rem;
  }
`;

const Heading4 = styled.h4`
  font-size: 3rem;
  @media (max-width: 600px) {
    font-size: 2.8rem;
  }
`;

const Heading5 = styled.h5`
  font-size: 2.6rem;
`;

const Heading6 = styled.h6`
  font-size: 2.1rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  line-height: 2em;
  font-weight: 700;
`;
