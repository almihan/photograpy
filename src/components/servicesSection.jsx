import React from 'react';
import styled from 'styled-components';
import clock from '../img/clock.svg';
import diaghragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import {About,Description,Image} from '../styles/styles';
import { fade } from '../animation';
import { UseScroll } from './useScroll';


const ServicesSection = ()=>{
  const [element,controls] =UseScroll();
  return (
    <Services variants={fade} animate={controls} initial='hidden' ref={element}>
      <Description>
        <h2>High <span>Quality</span> Services</h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt='clock'/>
              <h3>Efficient</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            
            </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt='teamwork'/>
              <h3>Teamwork</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
            
            </Card>
            <Card>
            <div className="icon">
              <img src={diaghragm} alt='diaghragm'/>
              <h3>Diaphragm</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
           
            </Card>
          <Card>
            <div className="icon">
              <img src={money} alt='money'/>
              <h3>Affordable</h3>
              </div>
              <p>Lorem ipsum dolor sit amet.</p>
           
            </Card>
          </Cards>
        </Description>
       <Image>
          <img src= 'https://images.pexels.com/photos/3022134/pexels-photo-3022134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' alt='home'/>
        </Image>
      </Services>
  );
}

const Services = styled(About)`
h2{
  padding-bottom:5rem;

}
p{
  width:70%;
  padding:2rem 0rem 4rem 0rem;

}

`;

const Cards = styled.div`
display:flex;
flex-wrap: wrap;

@media(max-width: 1300px){
   justify-content: center;
  }

`;

const Card = styled.div`
flex-basis:20rem;

.icon{
  display:flex;
  align-items: center;

  h3{
    margin-left:1rem ;
    background: white;
    color:black;
    padding:1rem;
  }
}
`;

export default ServicesSection;