import React ,{useState}from 'react'
import {AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography} from '@mui/material'
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import {Link} from 'react-router-dom'
import '../../styles/HeaderStyle.css'
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';



const Header = () => {
  const [mobileOpen,setMobileOpen]=useState(false)
  const handleDrawerToggle = ()=>{
    setMobileOpen(!mobileOpen)
  }
   const drawer=(
    <Box  onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
        <Typography color={"goldenrod"} variant="h6" component="div" sx={{flexGrow:1,my:2}}>
        <TravelExploreIcon/>
        Travel Biz
      </Typography>
      <Typography color={"white"} variant="h6" component="div" sx={{flexGrow:15,my:2}} className='Account'>
        <AccountBoxIcon/>
        Login
      </Typography>
         <Divider/>
        <ul className='mobile-navigation'>
          <li>
            <Link className='litag' to ={'/'}>Home</Link>
          </li>
          <li>
            <Link className='litag' to ={'/Hotels'}>Hotels</Link>
          </li>
          <li>
            <Link className='litag' to ={'/Lodges'}>Lodges</Link>
          </li>
          <li>
            <Link className='litag' to ={'/Chats'}>Chats</Link>
          </li>
          <li>
            <Link className='litag' to ={'/Places'}>Places</Link>
          </li>
          <li>
            <Link className='litag' to ={'/login'}>Login</Link>
          </li>
          <li>
            <Link className='litag' to ={'/register'}>Register</Link>
          </li>
        </ul>
      
    </Box>
   )
  return (
    <>
    <Box>
    <AppBar component={'nav'} sx={{bgcolor:"black"}}>
      <Toolbar>
        <IconButton
         color= "goldenrod"
         arial-label="open drawer"
          edge="start"
           sx={{mr:2 ,
           display:{sm:"none"}
           ,}}
           onClick={handleDrawerToggle}
           
           >
        <MenuIcon/>
        </IconButton>
      <Typography color={"goldenrod"} variant="h6" component="div" sx={{flexGrow:1}}>
        <TravelExploreIcon/>
        Travel Biz
      </Typography>
      <Typography color={"white"} variant="h6" component="div" sx={{flexGrow:15,my:2}} className='Account'>
        <AccountBoxIcon/>
        <button type='submit' className='sub'>Login</button>
      </Typography>
      <Box sx={{display:{xs:'none',sm:'block'}}}>
        <ul className='navigation-menu'>
          <li>
            <Link className='litagg' to ={'/'}>Home</Link>
          </li>
          
          <li>
            <Link className='litagg' to ={'/Hotels'}>Hotels</Link>
          </li>
          <li>
            <Link className='litagg' to ={'/Lodges'}>Lodges</Link>
          </li>
          <li>
            <Link className='litagg' to ={'/Chats'}>Chats</Link>
          </li>
          <li>
            <Link className='litagg' to ={'/Places'}>Places</Link>
          </li>
          <li>
            <Link className='litagg' to ={'/login'}>Login</Link>
          </li>
          <li>
            <Link className='litagg' to ={'/register'}>Register</Link>
          </li>
        </ul>
       
      </Box>
      </Toolbar>
    </AppBar>
          <Box component="nav">
            <Drawer  variant="temporary" open={mobileOpen}
               onClose={handleDrawerToggle}
               sx={{display:{xs:'block',sm:'none'},"&.MuiDrawer-paper":{
              boxSizing:"border-box",
            width:"240px"},
          }}
               >
                {drawer}

            </Drawer>
            </Box>  
            <Box sx={{p:1}}>
            <Toolbar/>
            </Box>

    </Box>
    
       
        </>
  )

}

export default Header