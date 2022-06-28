import React from 'react'
import { Formik,Form } from 'formik';
import TextField from './TextField';
import * as Yup from 'yup'
const Signup = () => {
  const validate =Yup.object(
    {
      firstName: Yup.string().max(16,'just 16 characters').required('Required'),
      lastName: Yup.string().max(14,'just 14 characters').required('Required'),
      email: Yup.string().email('email is invalide').required(' Email is Required'),
        password: Yup.string().min(8,'password must be at least 8 characters').required(' Password is Required'),
      confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),

    }

  )
  return (
    <Formik
    initialValues={{
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      confirmPassword:''
    }}
    validationSchema={validate}
      onSubmit={values => {
        console.log(values)
      }}
    >
   {formik =>(
<div>
<h1 className='my-4 front-weight-bold-display-4'>
  Sign up
</h1>

<form>
<TextField label="First Name" name="firstName" type ="text"/>
<TextField label="Last Name" name="lastName" type ="text"/>
<TextField label="Email " name="email" type ="email"/>
<TextField label="Password" name="password" type ="password"/>
<TextField label="ConfirmPassword" name="confirmPassword" type ="password"/>
<button className='btn btn-dark mt-3' type ="submit" style={{marginRight:"15px"}}>Register</button>
<button className='btn btn-danger mt-3 ml-3' type ="reset">Reset</button>
</form>
</div>
   )}
    

        </Formik>
  )
}

export default Signup