import React, { useState } from 'react'
import { Navigate } from "react-router-dom";
import { getLogin } from '../../services/actions/profile';
import { useMyDispatch, useMySelector } from '../../utils/types';
import './Login.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';


export const Login = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { isAuth } = useMySelector((store) => store.profile);
  const dispatch = useMyDispatch();

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

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
      <form className='login_form'>
        <Stack spacing={4} sx={{ width: 300 }}>
          <TextField
            id="login"
            label="Login"
            variant="standard"
            onChange={onChangeLogin}
          />
          <TextField
            id="password"
            label="Password"
            type={showPassword? 'text': 'password'}
            variant="standard"
            autoComplete="current-password"
            onChange={onChangePassword}
            InputProps={{
              endAdornment:
                <InputAdornment position="end">
                  <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
                </InputAdornment>,
            }}
          />

          <Button variant="contained" onClick={handleSubmit}>Enter</Button>
        </Stack>
      </form>
    )
  }
}

