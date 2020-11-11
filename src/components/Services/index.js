import React from 'react'
import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-6.svg'
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} alt='image1' />
          <ServicesH2>Reduce Expenses</ServicesH2>
          <ServicesP>
            We help reduce your fees and increase your overall revenue
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} alt='image2' />
          <ServicesH2>Easy to Use</ServicesH2>
          <ServicesP>
            We offer you spectrum of services that you can use simple and
            instinctively. For those services we have conscription of quality.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} alt='image3' />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>
            We offer you spectrum of services that you can use simple and
            instinctively. For those services we have conscription of quality.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services
