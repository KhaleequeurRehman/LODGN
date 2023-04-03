import React from 'react'
import Layout from '../../components/Layout'
import { CenteredContainer, ErrorMessage, ErrorPageContainer, PrimaryCustBtn } from '../../components/CustomComponents/CustomComponents'
import { useNavigate } from 'react-router-dom'



const Error = () => {
  const navigate = useNavigate()

  return (
    <>
      <Layout>
       <ErrorPageContainer>
        <CenteredContainer>
            <ErrorMessage>Page Not Found</ErrorMessage>
            <PrimaryCustBtn onClick={()=> navigate('/')}>Goto Home</PrimaryCustBtn>
        </CenteredContainer>
       </ErrorPageContainer>
      </Layout>
    </>
  )
}

export default Error















// import * as React from 'react';
// import Slider from '@mui/material/Slider';
// import { alpha, styled } from '@mui/material/styles';

// const SuccessSlider = styled(Slider)(({ theme }) => ({
//   width: 300,
//   color: theme.palette.success.main,
//   '& .MuiSlider-thumb': {
//     '&:hover, &.Mui-focusVisible': {
//       boxShadow: `0px 0px 0px 8px ${alpha(theme.palette.success.main, 0.16)}`,
//     },
//     '&.Mui-active': {
//       boxShadow: `0px 0px 0px 14px ${alpha(theme.palette.success.main, 0.16)}`,
//     },
//   },
// }));

// export default function StyledCustomization() {
//   return <SuccessSlider defaultValue={30} />;
// }