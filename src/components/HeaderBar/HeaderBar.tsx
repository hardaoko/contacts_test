import {FC} from 'react'
import './HeaderBar.css'
import { IHeaderBarProps } from "../../utils/types";
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
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
        onChange={onChangeSearch}
        sx={{marginRight: '5vw'}}/>
    </header>
  )
}

