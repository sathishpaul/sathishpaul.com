import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import Navbar from '../components/Navbar';

const PhotosPage = () => (
  <Layout>
    <Navbar />
    <div>
      <h3>Coming soon!</h3>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default PhotosPage;
