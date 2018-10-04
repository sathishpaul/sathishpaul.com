import React from 'react';
import me from '../images/me.jpg';
import places from '../images/places-I-lived.svg';

const AboutPage = () => {
  return (
    <div className="container"> 
      <img src={me} className="myPic" alt="me looking to the top" />
       <p>Hi there! <span role="img" aria-label="Hello">👋🏾</span></p>
       <p>
            I am a Christian, husband to my lovely wife, a soon-to-be dad, and a web developer living in the Bay area. 
          </p>

          <p>
            I believe Jesus is the answer to any and every human need. The world will be a better place if we all followed what Jesus said: 
              Love the Lord, your God with all your heart and Love your neighbor as yourself.
              It is fascinating that every single commandment can be contained within these two.
          </p>

          <p>
            I enjoy making Web applications and I have been thrilled to see the recent developments in JavaScript and CSS.
            Flexbox and CSS Grid have made Web layout so much simpler compared to a decade ago. I am thankful that I have access to these tools and APIs.
          </p>

          <p>You can find more about me on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/sathishpaul">Twitter</a> 
              &nbsp; or <a href="https://www.linkedin.com/in/sathish-paul-leo-396b7b1" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
          </p>

       <p>Inspired by <a href="https://twitter.com/steveschoger/status/882949496388321284" target="_blank" rel="noopener noreferrer">Steve Schoger</a>
        , here are the places where I have lived.</p>
       <img src={places} alt="places I have lived" />
       
       <p>Made with <span role="img" aria-label="love">❤️</span> using <a href="https://www.gatsbyjs.org/" target="_blank" 
        rel="noopener noreferrer">Gatsby</a> and deployed on <a href="https://www.netlify.com/" target="_blank" 
        rel="noopener noreferrer">Netlify</a>.</p>
    </div>
  );
};

export default AboutPage;