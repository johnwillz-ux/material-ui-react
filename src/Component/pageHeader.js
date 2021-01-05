import React from 'react'
import { Paper, Card, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme =>( {
root:{
    backgroundColor: '#FAF5EF',
},
pageHeader:{
    padding:theme.spacing(4),
    display: 'flex',
    alignItems:'center',
    marginBottom:theme.spacing(3),
},

pageIcon:{
    dispaly: 'inline-block',
    marginRight: theme.spacing(4),
    padding:theme.spacing(2),
    color:'#8E7DBE'
}


}))

export default function PageHeader(props){
    const{title, subTitle, icon}= props;
    const classes = useStyles();


    return(
       < Paper elevation={0} square className={classes.root}>
           <div className={classes.pageHeader}   >
            <Card className={classes.pageIcon}>
                {icon}
            </Card>
            <div >
                <Typography
                variant='h6'
                component="div"
                >{title}</Typography>
                <Typography
                variant='subtitle2'
                component="div"
                >{subTitle}</Typography>
            </div>
           </div>
           </ Paper>
        
    )
}