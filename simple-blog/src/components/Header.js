import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom";
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


const pages = ['Feed','Profile'];
const Header = () => {

function logOutUser(e){
    e.preventDefault()
    localStorage.removeItem("currentUser")
}

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        SvetBlog
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Button color="inherit">
                            <Link to = "/" style={{textDecoration:'none', color:'white'}}>
                            Feed
                            </Link>
                        </Button>

                        {localStorage.currentUser
                            ?
                            <Button color="inherit">
                                <Link to="/Profile" style={{textDecoration: 'none', color: 'white'}}>
                                    Profile
                                </Link>
                            </Button>
                            :
                            ''
                        }
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>


                        {localStorage.currentUser
                            ?
                            <Button
                                color="inherit"
                                variant="contained"
                                onClick={e => logOutUser(e)}
                                style={{padding: 0 , height:'20px'}}>
                                <Link to="/Login" style={{textDecoration: 'none'}}>
                                    Log Out
                                </Link>
                            </Button>
                            :
                            <Button style={{padding: 0 , height:'20px'}} color="inherit" variant="contained">
                            <Link to="/Login" style={{textDecoration: 'none'}}>
                                Sign Up / Log In
                            </Link>
                            </Button>}

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;
