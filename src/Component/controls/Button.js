import { Button, makeStyles } from '@material-ui/core';
import React from 'react';




const useStyles = makeStyles (theme => ({
    root: {
        margin: theme.spacing(0.5)
    },
    label: {
        textTransform:'none'
    }
}))

export default function Btn (props){
    const{text, size, color,variant,onClick, ...other}=props

    const classes = useStyles();

    return(

   < Button
   classes={{root:classes.root, label:classes.label}}
   variant={variant || 'contained'}
   size={size || 'large'}
   color={color || 'primary'}
   onClick={onClick}
   {...other}>
       {text}</Button>

    )

}