import {FC, useState} from 'react'
import './HeaderBar.css'
import { IHeaderBarProps } from "../../utils/types";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';


export const HeaderBar: FC<IHeaderBarProps> = ({onChangeSearch}) => {


  return (
    <header>
      <TextField
        id="search"
        label="Search"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={onChangeSearch}/>
    </header>
  )


}

