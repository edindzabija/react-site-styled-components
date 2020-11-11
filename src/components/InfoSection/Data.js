import image1 from '../../images/svg-1.svg'
import image2 from '../../images/svg-2.svg'
import image3 from '../../images/svg-3.svg'

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'Premium Services',
  headline: 'Unlimited Transactions with zero fees',
  description: `Lorem ipsum dolor,
    sit amet consectetur adipisicing elit.
    Delectus recusandae assumenda neque quis. 
    Eius veniam voluptas ad laudantium quod!`,
  buttonLabel: 'Get Started',
  imgStart: false,
  img: image1,
  alt: 'Guy with monies',
  dark: true,
  primary: true,
  darkText: false,
}

export const homeObjTwo = {
  id: 'services',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Buy and exchange crypto',
  headline: 'Unlimited Transactions with zero fees',
  description: `Lorem ipsum dolor,
    sit amet consectetur adipisicing elit.
    Delectus recusandae assumenda neque quis. 
    Eius veniam voluptas ad laudantium quod!`,
  buttonLabel: 'Get Started',
  imgStart: true,
  img: image2,
  alt: 'Phone',
  dark: false,
  primary: false,
  darkText: true,
}

export const homeObjThree = {
  id: 'premium',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Premium support',
  headline: 'Our support is available 24h every day',
  description: `We offer you support when you are conquering the art of buying and selling cryptocurrencies, making them worth more.`,
  buttonLabel: 'Get Started',
  imgStart: false,
  img: image3,
  alt: 'next.js',
  dark: false,
  primary: false,
  darkText: true,
}
