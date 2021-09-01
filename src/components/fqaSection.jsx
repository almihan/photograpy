import React from 'react';
import styled from 'styled-components';
import { AnimateSharedLayout } from 'framer-motion';
import { About } from '../styles/styles';
import Toggle from './toggle';
import { UseScroll } from './useScroll';
import { fade } from '../animation';


const FqaSection =()=>{
  const [element,controls] = UseScroll();
  return (
    <Faq variants={fade} initial='hidden' animate={controls} ref={element}>
      <h2>Any Questions <span>FAQ</span></h2>
      <AnimateSharedLayout>
      <Toggle title='How Do I Start?'>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, adipisci!</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, exercitationem ipsam! Quidem assumenda sunt minima deleniti velit omnis quaerat repudiandae.
          </p>
          </div>
          </Toggle>
          <Toggle title='Daily Scheduale'>
        
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, adipisci!</p>
          </div>
        
          </Toggle>
          <Toggle title='Different Payment Methods'>
           
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, adipisci!</p>
          </div>
         
          </Toggle>
          <Toggle title='What Products Do You Offer?'>
            
        <div className="answer">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, adipisci!</p>
          </div>
         
          </Toggle>
          </AnimateSharedLayout>
          </Faq>
  );
};

const Faq =styled(About)`
display:block;
span{
  display: block;

}
h2{
  padding-bottom: 2rem;
  font-weight:lighter;
}

.faq-line{
  background: #cccccc;
  height: 0.2rem;
  margin:2rem 0rem;
  width:100%;
}
.question{
  padding:3rem 0rem;
  cursor: pointer;

}
.answer{
  padding:2rem 0rem;
  p{
    padding:1rem 0rem;
  }
}
`;

export default FqaSection;