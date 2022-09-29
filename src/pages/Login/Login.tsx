import React, { useState } from 'react'
import { Navigate } from "react-router-dom";
import { getLogin } from '../../services/actions/profile';
import { useMyDispatch, useMySelector } from '../../utils/types';
import './Login.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { contactsRequest } from '../../services/Api';
import { getContacts } from '../../services/actions/contacts';


export const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const { isAuth } = useMySelector((store) => store.profile);
  const dispatch = useMyDispatch();

  const onChangeLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!login || !password) return;
    dispatch(getLogin(login, password));
  };

  if (isAuth) {
    return (
      <Navigate replace to="/" />
    );
  } else {
    return (
      <div className='login_container'>
        <form>
          <Stack spacing={4}>
            <TextField
              id="login"
              label="Login"
              variant="standard"
              onChange={onChangeLogin}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="standard"
              autoComplete="current-password"
              onChange={onChangePassword}
            />
            <Button variant="contained" onClick={handleSubmit}>Enter</Button>
          </Stack>
        </form>
      </div>
    )
  }
}

