import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import Navbar from '../components/Navbar';
import resume from '../images/resume.pdf';

const WorkPage = () => (
  <Layout>
  <Navbar />
  <div>
    <p>I am a UI Engineer working at Oracle in the Bay area. I love working with JavaScript, HTML and CSS to bring
      wonderful experiences to life on the Web. I am particularly thrilled with the recent developments to the JavaScript
      language, as well as the incredible layout improvements brought to CSS by Flexbox and Grid.
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

    <p className="myPrinciplesContainer">
      Here are some of the principles I have come to learn and uphold in my work.
      <ul className="myPrinciples">
        <li>
          To have a “leave it better than I found it” mentality, to be willing to work with and improve code that 
          I did not originally write. 
        </li>      
	      <li>To sweat the details, especially the small ones. They add up to make a big difference in the overall experience. </li>
	      <li>To be pragmatic about when to decide to ship something, as opposed to constantly tinkering with it.</li>
	      <li>The humility to say “I do not know, but I can find out” and to have a teachable mind.</li>
	      <li>To always remember that people are more important than code. That it is important to treat people right and 
          value them as an individual, independent of their work.</li>
      </ul>
    </p>

    <h3>Experience</h3>
    <h4>Staff Software Engineer - Oracle Corporation</h4>

    <Link to="/">Home</Link>
  </div>
</Layout>
);

export default WorkPage;