import React from 'react';
import Layout from '../components/layout';
import Navbar from '../components/Navbar';
import AboutPage from '../components/about';
import '../components/site.css';

const IndexPage = () => (
  <Layout>
    <Navbar />
    <AboutPage />
  </Layout>
)

export default IndexPage
