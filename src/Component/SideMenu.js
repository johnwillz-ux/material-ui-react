import { Divider } from "@material-ui/core"
import React from "react"
import {makeStyles, withStyles} from "@material-ui/core";



const useStyles = makeStyles({ sideMenu:{
            display: 'flex',
            flexDirection: "column",
            position: "absolute",
            left: '0px',
            width: '320px',
            height: '100%',
            backgroundColor: '#F1E3D3'

}})


export default function SideMenu(){

    const classes = useStyles();
    return(
        <div className = {classes.sideMenu}></div>
    )
}