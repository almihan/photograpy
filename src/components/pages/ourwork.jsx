import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { pageAnimation,fade,photoAnim,lineAnim,sliderContainer, slider } from '../../animation';
import { UseScroll } from '../useScroll';
import ScrollUp from '../scrollTop';

const OurWork =()=>{
  
  const [element1,controls1] =UseScroll();
  const [element2,controls2] =UseScroll();
  return (
    <Work variants={pageAnimation} initial='hidden' animate='show' exit='exit' style={{background:'#fff'}} >
      <motion.div variants={sliderContainer}>
      <Frame1 variants={slider}></Frame1>
      <Frame2 variants={slider}></Frame2>
      <Frame3 variants={slider}></Frame3>
      <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie >
         <motion.h2 variants={fade}>The Athlete </motion.h2>
         <motion.div  variants={lineAnim}   className='line'></motion.div>
         <Link to='/work/the-athlete'><Hide><motion.img  variants={photoAnim}  src='https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640' alt='athlete'/></Hide></Link>
      </Movie>
      <Movie >
         <h2>The Racer </h2>
         <motion.div ref={element1} variants={lineAnim} animate={controls1} initial='hidden' className='line'></motion.div>
         <Link to='/work/the-racer'><img src='https://images.pexels.com/photos/2745827/pexels-photo-2745827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640' alt='the racer'/></Link>
      </Movie>
      <Movie >
         <h2>Good Times </h2>
         <motion.div ref={element2} variants={lineAnim} animate={controls2} initial='hidden'  className='line'></motion.div>
         <Link to='/work/goodtimes'><img src='https://images.pexels.com/photos/7503251/pexels-photo-7503251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=480&w=640' alt='goodtimes'/></Link>
      </Movie>
      <ScrollUp />
      </Work>
    
  );
}

const Work =styled(motion.div)`
min-height: 100vh;
overflow: hidden;
padding:5rem 10rem;
@media(max-width: 1300px){
    padding:2rem 2rem;
  }

h2{
  padding:1rem 10rem;
}

`;

const Movie = styled(motion.div)`
padding-bottom: 10rem;

.line{
  height: 0.5rem;
  background: #23d997;
  margin-bottom: 3rem;

}

img{
  width:100%;
  height: 70vh;
  object-fit: cover;
}
`;
const Hide = styled.div`
overflow: hidden;
`;

const Frame1= styled(motion.div)`
position: fixed;
left:0;
top:10%;
width:100%;
height: 100vh;
background: #fffebf;
z-index:2;

`;

const Frame2 = styled(Frame1)`
background:#ff8efb;
`;
const Frame3=styled(Frame1)`
background: #8ed2ff;
`;

const Frame4 =styled(Frame1)`
background:#8effa0;
`;
  

export default OurWork;