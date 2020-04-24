import React, {useState, useEffect} from 'react';
import Form from './components/Form.js';
import UserCard from './components/UserCard.js';
import * as yup from 'yup';
import axios from 'axios';
import './App.css';

const blankForm ={
  name:'',
  email:'',
  password:'',
  tos:false
};

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required('A Username is Required!'),

  email: yup
    .string()
    .email('Must Use a VALID Email Address')
    .required('Email Address is Required!'),

  password: yup
    .string()
    .min(3, 'Password Must Be At Least 3 Characters Long')
    .required('You Must Enter a Password to Proceed'),

  tos: yup
    .boolean()
    .oneOf([true], 'You Are Required to Accept The Terms of Service to Continue')
});





function App() {
  const [formValues, setFormValues] = useState(blankForm)
  const [users, setUsers] = useState([])
  const [formErrors, setFormErrors] = useState(blankForm)

  // useEffect(()=>{
  //   axios.get('https://reqres.in/api/users')
  //   .then(res =>{
  //     console.log(res.data.data)
  //     setUsers(res.data.data)
  //   })
  //     .catch(err =>{
  //       console.log(err)
  //     })
  // }, [])

  const postUser = user =>{
    axios.post('https://reqres.in/api/users', user)
      .then(res =>{
        //console.log(res)
        setUsers([...users, res.data])
      })
      .catch(err =>{
        console.log(err)
      })
  } 
  console.log(users)
  //postUser()

  const onSubmit = evt => {
    evt.preventDefault()

    const newUser = {
      name: formValues.name,
      email: formValues.email,
      password: formValues.password,
      tos: formValues.tos,
    }

    postUser(newUser)
    setFormValues(blankForm)
  }

  const inputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

    yup
      .reach(formSchema, name)
      .validate(value)
      .then(valid =>{
        setFormErrors(
          {...formErrors,
          [name]:''})
      })
      .catch(err =>{
        setFormErrors(
          {...formErrors, 
          [name]: err.errors[0]})
      })

    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  return (
    <div className="App">
     <Form 
     values={formValues}
     inputChange={inputChange}
     onSubmit={onSubmit}
     errors={formErrors}
     />
      
      <br />

      <h2>Registered Users</h2>
      {
        users.map(item =>{
          return(
            <UserCard details={item} />
          )
        })
      }
    </div>
  );
}

export default App;
