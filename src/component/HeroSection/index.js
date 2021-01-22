import React, {useState} from 'react'
import Video from '../../ressources/videos/video.mp4'
import { HeroContainer,HeroBg,VideoBg, HeroContent, Heroh1,HeroP,HeroBtn,ArrowForward,ArrowRight } from './HeroElements';
import {Button} from './ButtonElement.js';

export const HeroSection = () => {
   const [hover,setHover]= useState(false)

   const onHover = () => {
   setHover(!hover)
   }
    return (
        
        <HeroContainer>
            <HeroBg>
              <VideoBg className='video' autoPlay loop muted src={Video} type='video/mp4'>
              </VideoBg>
            </HeroBg>
            <HeroContent>
            <Heroh1>Convertisseur en ligne</Heroh1>
            <HeroP>
             Le meilleur convertisseur dollars - euros ainsi que
             euros-dollars ! 
             100% fiable ! Téléchargeable et en ligne ! 
             </HeroP>
             <HeroBtn>
               <Button to='/converter' onMouseEnter={onHover} onMouseLeave={onHover}>
                  Convertir {hover ? <ArrowForward /> : <ArrowRight />}
               </Button>
               </HeroBtn>
          </HeroContent>  
        </HeroContainer>
    );
};

