import Typography from '@mui/material/Typography'
import React from 'react'
import Layout from '../../components/Layout'
import { CenteredContainer, CustomBtn, DFlexContainer, Heading1, Heading2, Heading3, LodgnMainContainer, Para1, Para2, Para3, Para4, Para5 } from 'components/CustomComponents/CustomComponents'
import { Box, Grid } from '@mui/material'
import InfoDetailCard from 'components/InfoDetailCard'


const LODGN = () => {
  return (
    <>
      <Layout>
        <LodgnMainContainer>
          <Box sx={{p:"5px"}}>
            <Heading1>You currently  have 3 requests</Heading1>
            <Box sx={{background:"white",my:"10px",boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.25)'}}>
              <Grid container sx={{mt:"30px",mb:"10px",p:"20px 20px",justifyContent:"space-between"}}>
                <Grid item xs={12} md={12} lg={3.5} my="10px">
                  <Box>
                    <Heading2>St Judes Hospital</Heading2>
                    <Para3>You currently  have 3 requests</Para3>
                  </Box>
                </Grid>
                <Grid item xs={12} md={12} lg={3.5} my="10px">
                  <Box>
                    <Box sx={{display:"flex",justifyContent:"space-between"}}>
                      <Heading3>10</Heading3>
                      <Heading3>-</Heading3>
                      <Heading3>17</Heading3>
                    </Box>
                    <Box sx={{display:"flex",justifyContent:"space-between"}}>
                      <Para3>October</Para3>
                      <Para3>December</Para3>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={12} lg={3.5} my="10px">
                  <Box>
                    <Heading2>20 Rooms</Heading2>
                    <Para2>10 Singles, 10 doubles</Para2>
                  </Box>
                </Grid>
              </Grid>   
              <Box sx={{p:"10px"}}>
                <Grid container sx={{border: "1px solid #959595",borderRadius:{xs:"none",sm:"24px"},mb:"20px",justifyContent:"space-between"}}>
                  <Grid item xs={12} md={12} lg={3.5} py="10px" sx={{border:{xs:"1px solid #959595",sm:"none"},borderRight:{xs:"none",sm:"1px solid #959595"},borderRadius:{xs:"none",sm:'24px 0px 0px 24px'},background:"#FDF307",p:"15px 10px"}}>
                    <Box>
                      <Para3>RECEIVED</Para3>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={12} lg={3.5} py="10px" sx={{border:{xs:"2px solid #959595",sm:"none"},p:"15px 10px"}}>
                    <Box>
                      <Para3>NEGOTIATING</Para3>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={12} lg={3.5} py="10px" sx={{border:{xs:"1px solid #959595",sm:"none"},borderLeft:{xs:"none",sm:"1px solid #959595"},p:"15px 10px"}}>
                    <Box>
                      <Para3>COMPLETED</Para3>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>

          <Box sx={{background:"white",p:"10px 15px",borderRadius:"54px",boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.25)',my:"30px"}}>
              <Grid container sx={{mt:"30px",mb:"10px",p:"20px 20px",justifyContent:"space-between"}}>
                <Grid item xs={12} md={12} lg={3.5} my="10px">
                  <Box>
                    <Heading2>St Judes Hospital</Heading2>
                    <Para3>You currently  have 3 requests</Para3>
                  </Box>
                </Grid>
                <Grid item xs={12} md={12} lg={3.5} my="10px">
                  <Box>
                    <Box sx={{display:"flex",justifyContent:"space-between"}}>
                      <Heading3>10</Heading3>
                      <Heading3>-</Heading3>
                      <Heading3>17</Heading3>
                    </Box>
                    <Box sx={{display:"flex",justifyContent:"space-between"}}>
                      <Para3>October</Para3>
                      <Para3>December</Para3>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={12} lg={3.5} my="10px">
                  <Box>
                    <Heading2>20 Rooms</Heading2>
                    <Para2>10 Singles, 10 doubles</Para2>
                  </Box>
                </Grid>
              </Grid>   
              <Box sx={{p:"10px"}}>
                <Grid container sx={{border: "none",outline:"none",borderRadius:"24px",mb:"20px"}}>
                  <Grid item xs={10} lg={8} py="10px" sx={{borderRadius:"24px",background:"#44A16F",p:"15px 10px"}}>
                    <Box>
                      <Para3 sx={{color:"white"}}>COMPLETED</Para3>
                    </Box>
                  </Grid>
                </Grid>
              </Box>

              <Box sx={{p:"10px",mb:"20px"}}>
                <Grid container sx={{border: "none",outline:"none",borderRadius:"24px",mb:"20px",justifyContent:"space-between"}} gap={2}>
                {
                  [1,2,3].map((item,i)=>(
                    <Grid item xs={12} md={5} lg={3.8} key={i}>
                      {
                        i===0? <InfoDetailCard hasBadge={true} /> : <InfoDetailCard />
                      }
                    </Grid>
                  ))
                }
                </Grid>
              </Box>
          
          </Box>

          {/* <Box sx={{background:"white",p:"10px",my:"30px"}}>
              <Box sx={{p:"10px"}}>
                <Grid container sx={{border: "none",outline:"none",borderRadius:"24px",mb:"20px",justifyContent:"space-between"}} gap={2}>
                  <Grid item xs={12} md={5} lg={3.8} sx={{borderRadius:"10px",background:"#F5F4F4",border:"1px solid rgba(0, 0, 0, 0.18)"}}>
                    <Box>
                      <CenteredContainer sx={{py:"20px"}}>
                        <Box sx={{width:"48",height:"53"}}>
                          <img src="assets/images/hIcon.svg" alt="" style={{width:"100%",height:"100%"}} />
                        </Box>
                        <Typography sx={{fontSize:{xs:"14px",sm:"19px",fontWeight:"400",color:"#85C371"}}}>Holiday Inn</Typography>
                      </CenteredContainer>
                      <Box sx={{background:"#EEEEEE",border: "1px solid rgba(0, 0, 0, 0.18)",borderRadius:"10px",boxShadow: "0px -2px 8px rgba(0, 0, 0, 0.25)",p:"10px",mt:"5px"}}>
                        <Para3 sx={{pl:"5px"}}>1.5 miles away from joblocation.</Para3>
                        <Box sx={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
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
                  </Grid>
                </Grid>
              </Box>
          </Box> */}

        </LodgnMainContainer>
      </Layout>
    </>
  )
}

export default LODGN














































{/* <Typography sx={{fontFamily:"Poppins"}}>LODGN</Typography> */}
