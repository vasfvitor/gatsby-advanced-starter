import * as React from "react";
import { Helmet } from "react-helmet";
import { useConfig } from "gatsby-theme-advanced";
import Layout from "../gatsby-theme-amaranth/layouts";
import styled from "styled-components";

const AboutPage = (): JSX.Element => {
  const config = useConfig();

  const Wrapper = styled.main`
  width: 100%;
  word-wrap: break-word;
  word-break: break-word;
  display: grid;
  grid-gap: 24px;
  justify-items: center;
`;

  return (
    <Layout>
      <div className="about-container">
        <Helmet title={`About | ${config.website.title}`} />
        <Wrapper>
        <h1>Opa, estamos em construção</h1>
       Enquanto isso confira as redes sociais para saber mais sobre o Combatente Rico
        </Wrapper>
      </div>
    </Layout>
  );
};

export default AboutPage;





