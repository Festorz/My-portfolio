import React from 'react'
import { DescriptionText, MainBox, SkillsBox, StyledGrid, StyledGridItem, StyledIcon, StyledPaper, StyledSection, TimeBox } from '../styles/styles'
import { Box } from '@material-ui/core'
import { StyledText } from '../styles/styles'
import { amber } from '@material-ui/core/colors'
import { ChevronRight } from '@material-ui/icons'
import PixIcon from '@mui/icons-material/Pix';
import { experience } from '../navbar/data'

const Experience = () => {
    return (
        <MainBox mtop={50}>
            <Box align='center'>
                <StyledText mcolor={"#fff"}>My <b style={{ color: '#ff8f00' }}>Work Experience</b> </StyledText>
            </Box>
            <StyledSection mtop={20} >
                <StyledGrid container>
                    {experience.map((data) => (
                        <StyledGridItem item mwidth={'45%'} key={data.id}>
                            <StyledPaper mwidth={'100%'}>
                                <DescriptionText mvariant mcolor={amber[800]} mfontsize={20} mbold transform={'capitalize'}>
                                    {data.role} <b style={{ color: '#27AE60' }}> - {data.institution}</b></DescriptionText>
                                <TimeBox>
                                    <DescriptionText mcolor={'#fff'} mfontsize={14}>{data.duration}</DescriptionText>
                                </TimeBox>
                                {data.duties.map((duty) => (
                                    <SkillsBox key={duty.id}>
                                        <Box sx={{ mr: 1, ml: 1, }}>
                                            <StyledIcon mcolor={amber[800]} mfontsize={14}><PixIcon fontSize='small' /></StyledIcon>
                                        </Box>
                                        <DescriptionText mcolor={'#e3f2fd'} mfontsize={16}>
                                            {duty.role}
                                        </DescriptionText>
                                    </SkillsBox>
                                ))}

                            </StyledPaper>
                        </StyledGridItem>
                    ))}
                </StyledGrid>
            </StyledSection>
        </MainBox>
    )
}

export default Experience