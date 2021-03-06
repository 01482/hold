import React from 'react';
import { Helmet } from 'react-helmet';

import Container from 'components/Container';
import Layout from 'components/Layout';
import Marquee from 'components/Marquee';

const IndexPage = () => {
  return (
    <Layout>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Marquee />
      <Container>
        <div>
          <p>01482 is a digital design practice with over 15 years experience partering with brands,
        individuals and studio’s. Founded by Graphic Designer <a href="http://www.craigjackson.io/" target="_blank">Craig Jackson</a>
          </p>
        </div>
        <div>
          <p>Selected partnerships: Airbnb, Apple, Anagram, BBC, Credit Suisse, Ford, Design Studio, Google, Its Nice That, Koto, Landor, LVMH, Made Thought, Moving Brands, Pentagram, Sennep, SPACE10, This Works and Wolff Olins</p>
        </div>
        <div>
          <p>Reach out if you would like to collaborate: <a href="mailto:craig@01482.xyz">craig@01482.xyz </a></p>
        </div>
      </Container>
    </Layout >
  );
};

export default IndexPage;
