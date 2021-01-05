import { Grid} from '@material-ui/core';
import {UseForm,Form} from '../Component/reUseForm';
import RadioGrp  from  '../Component/controls/RadioGroup';
import Input  from  '../Component/controls/input';
import Select  from  '../Component/controls/Select';
import *as StudentClasses from "../Classes/studentsClasses";
import DatePicker from "../Component/controls/DatePicker";
import Btn from "../Component/controls/Button";



const initialFValues={
    id:0,
    fullName:'',
    email:'',
    mobile:'',
    city:'',
    gender:'male',
    classId:'',
    admittedDate: new Date(),
}


const genderItems =[
    {id:'male', title:'Male'},
    {id:'female', title:'Female'},
    {id:'others', title:'Bobbyrisky'},
]

export default function StudentForm (){

    const {values,
        setValues, 
         handleInputChange}= UseForm(initialFValues);

    return(
        <Form>
            <Grid container>
                <Grid item xs={6}>
               <Input

               name='fullName'
               label='Full Name'
               value={values.fullName}
               onChange={handleInputChange}
               />
            
            <Input
    
               name='email'
               label='E-mail'
               value={values.email}
               onChange={handleInputChange}
               />
            
            <Input
    
               name='mobile'
               label='Mobile'
               value={values.mobile}
               onChange={handleInputChange}
               />
            
            <Input
    
               name='city'
               label='City'
               value={values.city}
               onChange={handleInputChange}
               />
            

                </Grid>
                <Grid item xs={6}>
                    <RadioGrp 
                    label='Gender'
                     name='gender' 
                     value={values.gender} 
                     onChange={handleInputChange} 
                     items={genderItems}/>



                     <Select 
                     name='classId'
                     label='Class'
                     value={values.classId}
                     onChange={handleInputChange}
                     options={StudentClasses.getClassName()} 
                     />

                     <DatePicker 
                     name=' admittedDate'
                     label='Admission Date'
                     value={values.admittedDate}
                     onChange={handleInputChange}
                     />
                    <div>
                    <Btn 
                    text='Submit'
                    type='submit'
                     />
                    <Btn 
                    text='Reset'
                   color='default'
                     />


                    </div>


                 
                    


                </Grid>

            </Grid>

            </Form>



    

    )

}