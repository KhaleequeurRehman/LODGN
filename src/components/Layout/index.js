import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import {NavListData } from '../../config';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { LogoWrapper, Para1, SecondaryCustBtn, SideBarListItem, SidebarNavLink } from 'components/CustomComponents/CustomComponents';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const drawerWidth = 296;

const Layout = (props) => {

  const navigate = useNavigate();

  const location = useLocation();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };


  const drawer = (
    <Box style={{minHeight:"100vh",display:'flex',flexDirection:"column",justifyContent:"space-between"}}>
      <Box>
        <Box sx={{width:"100%",minHeight:"90px",display:"flex",alignItems:"center"}}>
          <LogoWrapper component={Link} to="/" className='logo'>
              LODGN
          </LogoWrapper>
        </Box>
        <Box component="ul" sx={{mt:"2rem"}}>
          {
            NavListData && Array.isArray(NavListData) && NavListData.map((item, index) => ( 
                <SideBarListItem component="li" key={index}>
                  <SidebarNavLink component={NavLink} to={item?.link}>
                          {item?.text}
                  </SidebarNavLink>
                </SideBarListItem> 
            ))
          }
        </Box>
      </Box>
      <Box sx={{display:'flex',justifyContent:"center",alignItems:"center",mb:"20px"}}>
        <Box sx={{textAlign:"center"}}>
          <SecondaryCustBtn disableRipple>Log - Out</SecondaryCustBtn>
          <Para1 sx={{mt:{xs:"5px",sm:"10px"}}}>Help-Desk:</Para1>
          <Para1>786-874 9988</Para1>
        </Box>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
      <Box sx={{width:"100%",display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: "white",
            color: "black",
            width: { md: `calc(100% - ${drawerWidth}px)` },
            ml: { md: `${drawerWidth}px` },
            display: { xs: 'block', md: 'none' }
          }}
        >
          <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
            <Box>
              <Typography sx={{fontSize:"20px",fontWeight:"600",m:"10px 0 5px 0",textTransform:"capitalize"}}>
                LODGN
              </Typography>
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          component="nav"
          sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 }}}
          aria-label="mailbox folders"
        >
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              boxShadow:"2px 0px 10px rgba(0, 0, 0, 0.25)",
              display: { xs: 'block', md: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', md: 'block' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
          >
            {drawer}
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{ flexGrow: 1, width: { md: `calc(100% - ${drawerWidth}px)`},marginTop:{ xs: '3.6rem', md: '0px' }}}
        >
          {props.children}
        </Box>
      </Box>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Layout;
