import React from 'react';
import about from '../img/about.jpg';
import { About,Description,Image,Hide } from '../styles/styles';

const AboutSection = ()=>{
  return (
   <About>
     <Description>
          <div className="title">
            <Hide><h2>We work to make
              </h2>
              </Hide>
              <Hide>
              <h2>Your <span>dreams</span> come
              </h2>
              </Hide>
              <Hide><h2>true.
              </h2>
              </Hide>
          </div >
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod ullam ex fuga et voluptas amet, laboriosam culpa repellendus iure soluta?</p>
          <button>Contact Us</button>
          </Description>
    <Image>
       <img src={about} alt='about'/>
       </Image>
     </About>
  );
};

export default AboutSection;