import React, { useState } from 'react'
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
        <HeroContent>
          <HeroH1>Cryptocurrency Made Easy</HeroH1>
          <HeroP>Sign up for a new account and start earning today!</HeroP>
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
