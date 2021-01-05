import React from 'react';
import StudentForm  from "../Students/StudentForm";
import PageHeader from "../Component/pageHeader";
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import { makeStyles, Paper } from '@material-ui/core';



const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }

}))

export default function Students (){

    const classes = useStyles();

    return(
        <>
        <PageHeader
      title="Add Student"
      subTitle="Form design with validation"
      icon={<PeopleOutlineIcon  fontSize='large' />}/>


      <Paper className={classes.pageContent}>
      <StudentForm/>

      </Paper>

 

        </>

    )

}