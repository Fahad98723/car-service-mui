import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/system';
import { Container } from '@mui/material';

const NavBar = () => {
    const theme = useTheme()
    const useStyle = makeStyles({
        navItem :{
            color : 'white',
            textDecoration : 'none'
        },
        navIcon : {
            [theme.breakpoints.up('sm')]: {
                display : 'none!important',
            }
        }
    })
    const {navItem, navIcon} = useStyle()
    const [state, setState] = React.useState(false);
    const list =  (
        <Box
          sx={{ width: 250 }}
          role="presentation"
        >
          <List>

              <ListItem button>
                <ListItemText>
                    <Link to = '/home'>Home</Link>                   
                </ListItemText>
              </ListItem>
              <Divider />
              <ListItem button>
              <ListItemText>
                <Link to = '/contact'>Contact</Link>
                </ListItemText>
              </ListItem>
          </List>

        </Box>
      );
    return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
        <Toolbar>
          <IconButton className ={navIcon}
          onClick={() => setState(true)}
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Link className={navItem} to ='/home'><Button color="inherit">Home</Button></Link>
          <Link className={navItem} to ='/contact'><Button color="inherit">Contact</Button></Link>
        </Toolbar>
        </Container>
      </AppBar>
    </Box>
    <div>
        <React.Fragment>
          <Drawer           
            open={state}
            onClose={() => setState(false)}
          >
            {list}
          </Drawer>
        </React.Fragment>
    </div>
    </>
    );
};

export default NavBar;