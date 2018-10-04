import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import Navbar from '../components/Navbar';
import resume from '../images/resume.pdf';

const WorkPage = () => (
  <Layout>
  <Navbar />
  <div>
    <p>I am a UI Engineer working at Oracle in the Bay area.
      This page provides details about my work history. If you would like to look at my resume, 
      click <a href={resume} target="_blank" rel="noopener noreferrer">here</a>.
    </p>


    <p>
      I have had the good fortune of working with some awesome people who have helped me shape my career and grow as a UI Engineer. If you are reading this, there is a good chance that you are one of those people. Thank You! 
      <span rel="img" aria-label="smile">😀</span>
    </p>

    <h3>Experience</h3>
    <h4>Staff Software Engineer - Oracle Corporation</h4>



    <Link to="/">Home</Link>
  </div>
</Layout>
);

export default WorkPage;