import React from 'react';
import { motion } from 'framer-motion';
import { About,Description,Image,Hide } from '../styles/styles';
import { titleAnim ,fade ,photoAnim} from '../animation';
import Wave from './wave';

const AboutSection = ()=>{

 
  return (
   <About>
     <Description>
          <motion.div className="title"  >
            <Hide><motion.h2 variants={titleAnim}> We work to make
              </motion.h2>
              </Hide>
              <Hide>
              <motion.h2 variants={titleAnim}>Your <span>dreams</span> come
              </motion.h2>
              </Hide>
              <Hide><motion.h2 variants={titleAnim}>true.
              </motion.h2>
              </Hide>
          </motion.div >
          <motion.p variants={fade}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod ullam ex fuga et voluptas amet, laboriosam culpa repellendus iure soluta?</motion.p>
          <motion.button variants={fade}>Contact Us</motion.button>
          </Description>
    <Image>
       <motion.img src='https://images.pexels.com/photos/1646169/pexels-photo-1646169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='about' variants={photoAnim} />
       </Image>
       <Wave />
     </About>
  );
};

export default AboutSection;