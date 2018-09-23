import React from 'react';
import Link from 'gatsby-link';
import me from '../me.jpg';
import about from '../about.css';

const AboutPage = () => {
  return (
    <div>
       <p>Hi there, 👋🏾! I am Sathish.</p>
       <div className="aboutMe">
        <img src={me} width="250" height="250" />
        <section>
            <p>
                I am a Christian, a soon-to-be dad, a web developer living in the Bay area. My interests include web development, recent advancements in JavaScript and photography.
            </p>
            <p>You can find more about me on <a target="_blank" href="https://twitter.com/sathishpaul">Twitter</a>
            </p>

            <p>
              If you would like to know my work history, click here to get my resume
            </p>
        </section>
       </div>
    </div>
  );
};

export default AboutPage;