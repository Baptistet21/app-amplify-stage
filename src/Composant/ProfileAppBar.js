import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {AmplifySignOut} from "@aws-amplify/ui-react";
import {Avatar} from "@mui/material";
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const ProfileAppBar = ({User}) =>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Avatar>{User.attributes.email[0]}</Avatar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {User.attributes.email}
                    </Typography>

                    <IconButton aria-label="cart">
                        <ShoppingCartIcon />
                    </IconButton>
                    <AmplifySignOut/>
                </Toolbar>
            </AppBar>
        </Box>

export default ProfileAppBar;