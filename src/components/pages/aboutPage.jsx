import React from 'react';
import AboutSection from '../aboutSection';
import ServicesSection from '../servicesSection';
import FqaSection from '../fqaSection';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../animation';
import ScrollUp from '../scrollTop';

const AboutPage =()=>{
  return(<motion.div variants={pageAnimation} initial='hidden' animate='show' exit='exit'>
<AboutSection />
<ServicesSection />
<FqaSection />
<ScrollUp />
</motion.div>
  );
};

export default AboutPage;