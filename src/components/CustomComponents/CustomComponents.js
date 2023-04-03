import React from 'react'
import { alpha, styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Padding } from '@mui/icons-material'


export const PrimaryCustBtn = styled(Button)(({ theme }) => ({
  color: "white",
  background:"linear-gradient(180deg, #48AF78 0%, #42996B 100%)",
  borderRadius: "10px",
  textTransform: 'none',
  [theme.breakpoints.up("sm")]: {
    fontSize: '22px',
    padding: '6px 30px'
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: '16px',
    padding: '6px 20px'
  },
  fontWeight: "600",
  '&:hover': {
    background:"linear-gradient(180deg, #48AF78 0%, #42996B 100%)",
  },
}));

export const SecondaryCustBtn = styled(Button)(({ theme }) => ({
  color: "white",
  background:"linear-gradient(180deg, #48AF78 0%, #42996B 100%)",
  borderRadius: "10px",
  textTransform: 'none',
  [theme.breakpoints.up("sm")]: {
    fontSize: '22px',
    padding: '12px 60px'
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: '16px',
    padding: '8px 40px'
  },
  fontWeight: "600",
  '&:hover': {
    background:"linear-gradient(180deg, #48AF78 0%, #42996B 100%)",
  },
}));

export const CustomBtn = styled(Button)(({ theme }) => ({
  color: "white",
  background:"#44A16F",
  borderRadius: "10px",
  textTransform: 'none',
  [theme.breakpoints.up("sm")]: {
    fontSize: '17px',
    padding: '6px 15px'
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: '14px',
    padding: '6px 15px'
  },
  fontWeight: "500",
  '&:hover': {
    background:"#44A16F",
  },
}));

export const CenteredContainer = styled(Box)(({ theme }) => ({
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
}));

export const DFlexContainer = styled(Box)(({ theme }) => ({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
}));


export const ErrorPageContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight:'calc(100vh - 150px)',
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
}));


export const LodgnMainContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight:'calc(100vh)',
  background:"#D9D9D9",
  [theme.breakpoints.up("sm")]: {
    padding:"50px 50px"
  },
  [theme.breakpoints.down("md")]: {
    padding:"50px 30px"
  },
  [theme.breakpoints.down("sm")]: {
    padding:"20px 20px"
  },
}));

export const LogoWrapper = styled(Box)(({ theme }) => ({
  textDecoration: 'none',
  color: '#323232',
  [theme.breakpoints.up("sm")]: {
    fontSize: '35.48px',
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: '28px',
  },
  fontWeight: '800',
  marginLeft: '2rem',

}));

export const SideBarListItem = styled(Box)(({ theme }) => ({
  borderBottom: "1px solid rgba(0, 0, 0, 0.29)",
  padding: "10px 10px 10px 0px",
  marginLeft: '1rem',
  marginRight: '1rem',
  listStyle: 'none',

}));


export const SidebarNavLink = styled(Box)(({ theme }) => ({
    color: '#494949',
    fontFamily: 'Poppins',
    [theme.breakpoints.up("sm")]: {
      fontSize: '22px',
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: '16px',
    },
    fontWeight: '600',
    textDecoration: 'none',
    '&.active, &:hover, &.Mui-focusVisible': {
      color: '#72AA83'
    },

}));

export const ErrorMessage = styled(Typography)(({ theme }) => ({
  color: "#42996b",
  [theme.breakpoints.up("sm")]: {
      fontSize: "3rem",
  },
  [theme.breakpoints.down("sm")]: {
      fontSize: "2rem",
  },
  fontWeight:"700",
  margin:"20px 0px"
}));

export const Para1 = styled(Typography)(({ theme }) => ({
  color: "#494949",
  [theme.breakpoints.up("sm")]: {
      fontSize: "17px",
  },
  [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
  },
  fontWeight:"500",
}));

export const Para2 = styled(Typography)(({ theme }) => ({
  color: "#959595",
  [theme.breakpoints.up("sm")]: {
      fontSize: "17px",
  },
  [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
  },
  fontWeight:"500",
}));

export const Para3 = styled(Typography)(({ theme }) => ({
  color: "#959595",
  [theme.breakpoints.up("sm")]: {
      fontSize: "16px",
  },
  [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
  },
  fontWeight:"500",
}));

export const Para4 = styled(Typography)(({ theme }) => ({
  color: "#959595",
  fontFamily:"Poppins",
  [theme.breakpoints.up("sm")]: {
      fontSize: "15px",
  },
  [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
  },
  fontWeight:"500",
}));

export const Para5 = styled(Typography)(({ theme }) => ({
  color: "white",
  fontFamily:"Poppins",
  fontSize: "13px",
  fontWeight:"500",
}));

export const Heading1 = styled(Typography)(({ theme }) => ({
  color: "#72AA83",
  fontFamily: "Poppins",
  [theme.breakpoints.up("sm")]: {
    fontSize: "28px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
  fontWeight:"600",
}));

export const Heading2 = styled(Typography)(({ theme }) => ({
  color: "#48AF78",
  [theme.breakpoints.up("sm")]: {
    fontSize: "29px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
  fontWeight:"700",
}));

export const Heading3 = styled(Typography)(({ theme }) => ({
  color: "#48AF78",
  [theme.breakpoints.up("sm")]: {
    fontSize: "27px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "16px",
  },
  fontWeight:"700",
}));

