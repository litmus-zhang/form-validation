import logo from './logo.svg';
import './App.css';
import FormInput from './components/FormInput';
import { useRef, useState } from 'react';

function App()
{
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    birthday: '',
    confirmPassword: ''

  });
  // const usernameRef = useRef();

  const input = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      errorMessage: 'Username should be 3-16 characters and should not include any special characters',
      label: 'Username',
      pattern: '^[a-zA-Z0-9]{3,16}$',
      required: true,
    },
    {
      id: 2,
      name: '   email',
      type: 'email',
      placeholder: 'Email',
      errorMessage: 'Email is not valid',
      label: 'Email',
      required: true,
    },
    {
      id: 3,
      name: 'birthday',
      type: 'date',
      placeholder: 'birthday',
      errorMessage: '',
      label: 'birthday',
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      errorMessage:
        'Password should be 8-20 characters and include at least 1 number, 1 uppercase letter and 1 special character',
      label: 'Password',
      pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
      required: true,
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'confirm Password',
      errorMessage: 'Password does not match',
      label: 'confirm Password',
      pattern: values.password,
      required: true,
    },
  ]

  const handleSubmit = (e) =>
  {
    e.preventDefault()
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
    
  }
  const handleChange = (e) =>
  {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }
  console.log(values);
  return (
    <div className='app'>
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {input.map(item => (
        
          <FormInput key={item.id} {...item} value={values[item.name]} onChange={handleChange} />
      ))}
      
      <button>Submit</button>  
      </form>
    </div>
  );
}

export default App;
