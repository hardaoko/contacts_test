import { FC } from "react";
import "./HeaderBar.css";
import { IHeaderBarProps, useMyDispatch } from "../../utils/types";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import { SIGN_OUT } from "../../services/actions/profile";

export const HeaderBar: FC<IHeaderBarProps> = ({ onChangeSearch }) => {
  const dispatch = useMyDispatch();

  const handleSignOut = () => {
    dispatch({ type: SIGN_OUT });
  };

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
      />
      <Button
        variant="contained"
        onClick={handleSignOut}
        sx={{ marginRight: "5vw" }}
      >
        Sign out
      </Button>
    </header>
  );
};
