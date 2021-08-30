import React, {useState, useCallback} from 'react'
import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import styles from './Login.module.css';
import Axios from 'axios';

import {useHistory} from 'react-router-dom';

function Login({setToken}) {
  let history = useHistory();
  
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  },[]);

  const submitValues = () => {
    Axios.post('http://localhost:5000/users/usersLogin/', {
      login,
      password
    }).then((response) =>{
      try {
        setLoading(true)
        const user = response.data.token;
        localStorage.setItem('@Sanduicheria:user', JSON.stringify(user));
        setToken(user);
        history.push('/')
      } catch {
        console.log(response.data)
      }
    })
  }

  return (
    <div className={styles.Login}>
      <Form onSubmit={handleSubmit}>
        <Input 
        type='text'
        onChange={e =>{setLogin(e.target.value)}}
        required>Login</Input>

      <Input 
        type='text'
        onChange={e =>{setPassword(e.target.value)}}
        required>Password</Input>

        <Button type='submit' onClick={submitValues}>Login</Button>
      </Form>
      
      {loading ? <h3>Carregando...</h3> : null}
    </div>
  )
}

export default Login
