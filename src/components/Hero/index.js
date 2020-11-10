import React, { useState } from 'react'
// import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import {
  ArrowForward,
  ArrowRight,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
} from './HeroElements'
import Particles from 'react-particles-js'

const Hero = () => {
  const [hover, setHover] = useState(false)

  const onHoverHandler = () => {
    setHover(!hover)
  }

  return (
    <div>
      <HeroContainer id='home'>
        <Particles />
        {/* <HeroBg>
          <HeroBgImage />
          <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg> */}
        <HeroContent>
          <HeroH1>Crypto Shite Made Easy</HeroH1>
          <HeroP>Sign up for a new account and start huslin' today</HeroP>
          <HeroBtnWrapper>
            <Button
              to='signup'
              onMouseEnter={onHoverHandler}
              onMouseLeave={onHoverHandler}
              primary='true'
              dark='true'
            >
              Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </div>
  )
}

export default Hero
