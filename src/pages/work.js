import React from 'react';
import {Link} from 'gatsby';
import Layout from '../components/layout';
import Navbar from '../components/Navbar';
import resume from '../images/resume.pdf';

const WorkPage = () => (
  <Layout>
  <Navbar />
  <div>
    <p>I am a UI Engineer working at Oracle in the Bay area. </p>
    
    <p>I love working with JavaScript, HTML and CSS to bring
      wonderful experiences to life on the Web. I am particularly thrilled with the recent additions to the JavaScript
      language (ES6+), as well as the incredible layout improvements brought to CSS by Flexbox and Grid.
    </p>

    <p>
      <i>If you would like to look at my resume, 
        click <a href={resume} target="_blank" rel="noopener noreferrer">here</a>.</i>
    </p>

    <p>
      I have had the good fortune of working with some awesome people who took a chance on me, gave me opportunities that helped me grow as a UI Engineer. 
      I would not be where I am, without help from those people. If you are reading this, there is a good chance that you are one of them. Thank you!
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
	      <li>To have the humility to say “I do not know, but I can find out”.</li>
        <li>To make a genuine attempt to deeply understand the language and tools that I use to build software.</li>
	      <li>To always remember that people are more important than code. That it is important to treat people right and 
          value them as individuals, independent of their work.</li>
      </ul>
    </p>

    <h3>Skills</h3>
    <ul>
      <li>Programming Languages: JavaScript, Java</li>
      <li>Web technologies: CSS (particularly Flexbox and Grid), HTML5, Java Servlets, and JSP</li>
      <li>Libraries and Frameworks: jQuery, KnockoutJS, ReactJS, Redux, AngularJS, and Dojo (yeah that one!)</li>
      <li>Server side frameworks: NodeJS, Express, Spring, Struts, and Hibernate</li>
      <li>Tools: Grunt, Gulp, Webpack, Git, Sketch, Figma, Ant, Maven and Perforce</li>
    </ul>

    <h3>Experience</h3>
    <h4>Staff Software Engineer - Oracle Corporation</h4> 
    <ul>
      <li>As one of the founding UI engineers in the team, I helped bootstrap the codebase from scratch and setup the plumbing necessary to build the Data Integration Cloud product.</li>
      <li>Designed and implemented the UI architecture for key, feature-rich projects.</li>
      <li>Helped onboard the team and served as a mentor, providing guidance on modern front-end best practices and tooling.</li>
      <li>Advocate for simplicity in design and implementation with a focus on maintainability.</li>
      <li>Served as a makeshift UX-designer, building mockups and icons whenever necessary. Sketch and Figma FTW!😁</li>
    </ul>

    <h4>Principal/Senior Software Engineer - Informatica Corporation</h4>
    <ul>
      <li>My time at Informatica were the years where I developed the crucial skills necessary to be a Web Developer.</li>
      <li>I am so grateful for the senior engineers and mentors who provided valuable guidance related to UI development.</li>
      <li>It was here that I learnt the importance of understanding the JavaScript language deeply.</li>
      <li>And thanks to the projects at Informatica, that I learnt how big of a deal CSS Flexbox was to layout (CSS grid was not yet unveiled)</li>
      <li>Other remarkable highlights at Informatica included: learning to use jQuery better, understanding what Dojo provided and realizing how ahead of its time Dojo really was and many other 
         little details of the wonderful world of Web development.
      </li>
    </ul>

    <h4>Software Engineer - Fatwire Corporation</h4>
    <ul>
      <li>I joined Fatwire Corporation right out of grad school and it was my first real Software Engineering job.</li>  
      <li>The company's main product was called Content Server - an on-premise Content Management Solution, that happened to work
        based on Web technologies.
      </li>
      <li>It was here that I was exposed to what Web development really was. My regular day involved dealing with
        server setups (JBoss, BEA Weblogic, IBM WebSphere etc).
      </li>
      <li>While I primarily dealt with writing Java code for capturing business logic, I quickly learnt how to build web pages using JSP, HTML, CSS and 
        got introduced to the language that would go on to become my chief skill: JavaScript.
      </li>
    </ul>

    <i>If you need further details about any of the above, please get in touch.</i>
    <br />
    <br />
    <Link to="/">Home</Link>
  </div>
</Layout>
);

export default WorkPage;