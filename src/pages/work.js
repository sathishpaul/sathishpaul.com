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
      This page provides details about my work history.
    </p>

    <p>
      <i>If you would like to look at my resume, 
        click <a href={resume} target="_blank" rel="noopener noreferrer">here</a>.</i>
    </p>

    <p>
      I have had the good fortune of working with some awesome people who have helped me shape my career and grow as a UI Engineer. 
      If you are reading this, there is a good chance that you are one of those people. Thank you!
      <span role="img" aria-label="smile">😀</span>
    </p>

    <p>
      Here are some of the principles I have come to learn and uphold in my work.
      <ul className="myPrinciples">
        <li>
          To have a “leave it better than you found it” mentality, and be willing to work with and improve on code you did not originally write. 
        </li>      
	      <li>To sweat the details </li>
	      <li>Small details add up to make a big difference</li>
	      <li>Point of diminishing returns</li>
	      <li>The humility to say “I do not know” and to have a teachable mind, the perspective that there is something to be learnt from every person, situation.</li>
	      <li>People are more important than code. It is important to treat people right and value them as an individual. Respect people, question the reason behind why  code and </li>
	      <li>Compassionate coding - brings my spiritual belief to the work place</li>
      </ul>
    </p>

    <h3>Experience</h3>
    <h4>Staff Software Engineer - Oracle Corporation</h4>

    <Link to="/">Home</Link>
  </div>
</Layout>
);

export default WorkPage;