import Box from '@mui/material/Box'
import { Para5 } from 'components/CustomComponents/CustomComponents'
import React from 'react'

const CustomBadge = ({text,...restProps}) => {
  return (
    <>
        <Box sx={{background:"#D96A6B",borderRadius:"10px",textAlign:"center",p:"10px 30px"}}>
            <Para5 {...restProps}>{text && text}</Para5>
        </Box>
    </>
  )
}

export default CustomBadge