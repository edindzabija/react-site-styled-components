import styled from 'styled-components'

export const InfoContainer = styled.section`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#0A0903')};
  height: 100vh;
  max-height: 960px;
  padding: 0 24px;

  @media screen and (max-width: 768px) {
    padding: 100px 24;
  }
`

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100%;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
`

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`

export const Column1 = styled.div`
  margin-bottom: 25px;
  padding: 0 25px;
  grid-area: col1;
`

export const Column2 = styled.div`
  margin-bottom: 25px;
  padding: 0 25px;
  grid-area: col2;
`
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const TopLine = styled.p`
  color: ${({ lightBg }) => (lightBg ? '#ac6111' : '#ff8200')};
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h2`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 720px) {
    font-size: 32px;
  }
`

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`

export const Img = styled.img.attrs({
  loading: 'lazy',
})`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`
