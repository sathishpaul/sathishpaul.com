import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import Navbar from '../components/Navbar';
import resume from '../images/resume.pdf'
const WorkPage = () => (
  <Layout>
  <Navbar />
  <div>
    <p>
      This page provides details about my work history. If you would like to look at my resume, 
      click <a href={resume} target="_blank" rel="noopener noreferrer">here</a>.
    </p>

    <Link to="/">Go back to the homepage</Link>
  </div>
</Layout>
);

export default WorkPage;