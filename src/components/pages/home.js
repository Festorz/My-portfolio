import React from 'react'
import my_pic from '../../data/images/mpic.png'
import { MainBox, StyledColumn, StyledImage, StyledSection, StyledText } from '../styles/styles'

const Home = () => {
  return (
    <MainBox >
      <StyledSection mtop={0} mreverse>
        <StyledImage
          component="img"
          alt="Festus kirui"
          src={my_pic}
        />
        <StyledColumn>
          <StyledText mfontsize={45} mcolor={'#fff'} >Hey There,</StyledText>
          <StyledText mfontsize={45}><b style={{ color: '#27AE60' }}>I'm</b> Festas Kibet Kirui.</StyledText>
          <StyledText align='' mcolor={'#fff'} mfontsize={45}>A full stack <br /> software <br /> developer.</StyledText>
          <StyledText mcolor={'#fff'} mfontsize={18} mtop={20} mbold>Specialized in web and mobile applications development. <br />
            I write clean codes of high quality and provide robust applications.</StyledText>
        </StyledColumn>
      </StyledSection>
    </MainBox>
  )
}

export default Home