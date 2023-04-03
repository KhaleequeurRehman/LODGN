import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import CustomBadge from 'components/CustomBadge'
import { CenteredContainer, CustomBtn, Para3, Para4 } from 'components/CustomComponents/CustomComponents'
import React from 'react'

const InfoDetailCard = ({hasBadge=false}) => {
  return (
    <>
        <Box sx={{borderRadius:"10px",background:"#F5F4F4",border:"1px solid rgba(0, 0, 0, 0.18)"}}>
            {
                hasBadge ? (
                    <Box sx={{display:"flex",justifyContent:"flex-end",marginTop:"-20px"}}>
                        <Box sx={{width:"127px",maxWidth:"128px"}}>
                            <CustomBadge text="Rare Find" />
                        </Box>
                    </Box>
                ):
                <Box sx={{minHeight:"20px"}}></Box>
            }
            <CenteredContainer sx={{py:"20px"}}>
                <Box sx={{width:"48",height:"53"}}>
                <img src="assets/images/hIcon.svg" alt="" style={{width:"100%",height:"100%"}} />
                </Box>
                <Typography sx={{fontSize:{xs:"14px",sm:"19px",fontWeight:"400",color:"#85C371"}}}>Holiday Inn</Typography>
            </CenteredContainer>
            <Box sx={{background:"#EEEEEE",border: "1px solid rgba(0, 0, 0, 0.18)",borderRadius:"10px",boxShadow: "0px -2px 8px rgba(0, 0, 0, 0.25)",p:"10px",mt:"5px"}}>
                <Para3 sx={{pl:"5px"}}>1.5 miles away from joblocation.</Para3>
                <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"}}>
                <Box sx={{my:"5px"}}>
                    <Para4>Singles: $120</Para4>
                    <Para4>Doubles: $145</Para4>
                </Box>
                <Box sx={{my:"5px"}}>
                    <CustomBtn disableRipple>Book now</CustomBtn>
                </Box>
                </Box>
            </Box>
        </Box>
    </>
  )
}

export default InfoDetailCard