import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import Navbar from '../components/Navbar';

const WorkPage = () => (
  <Layout>
  <Navbar />
  <div>
    <h3>This is my work</h3>
    <Link to="/">Go back to the homepage</Link>
  </div>
</Layout>
);

export default WorkPage;