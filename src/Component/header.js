import { AppBar, Badge, Grid, InputBase, Toolbar,IconButton,makeStyles } from "@material-ui/core";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import React from "react"
import ChatIcon from '@material-ui/icons/Chat';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    headColor:{
        backgroundColor: '#fff'
    },

    searchInput:{
        opacity: '0.6',
        padding: '0px 8px',
        fontSize: '0.8rem',
        transition: 'all 0.5s ease',
        '&:hover':{
            transition: 'all 0.5s ease',
            backgroundColor:'#f5f5f5'
        },
        '& .MuiSvgIcon-root':{
            marginRight:'8px'
        }
    }
})
 
export default function Header(){


    const classes = useStyles();
    return(
    <div>
        <AppBar position='static' className = {classes.headColor}>
            <Toolbar>

                <Grid container alignItems='center'>
                    <Grid item  >
                        <InputBase className = {classes.searchInput} placeholder='Search topics' startAdornment={<SearchIcon fontSize="small"/>}/>
                    </Grid>
                    <Grid item sm></Grid>
                    <Grid item >
                    <IconButton>
                   <Badge color={"primary"} badgeContent={1}>
                  < NotificationsNoneIcon fontSize="small"/>
                   </Badge>
                   </IconButton>
                    <IconButton>
                   <Badge badgeContent={9} color={"secondary"}>
                  < ChatIcon fontSize="small" />
                   </Badge>
                   </IconButton>

                    <IconButton>
                   <Badge  color={"secondary"}>
                  < ExitToAppIcon fontSize="small"/>
                   </Badge>
                   </IconButton>




                    </Grid>
                  

                </Grid>
            </Toolbar>
        </AppBar>
    </div>
    )
}
