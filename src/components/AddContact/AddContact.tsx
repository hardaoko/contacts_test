import {useState} from 'react'
import './AddContact.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useMyDispatch, useMySelector } from '../../utils/types';
import { addContact } from '../../services/actions/contacts';

export const AddContact = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useMyDispatch();

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    dispatch(addContact(name, description));
  };

  return (
    <div>
      <form>
        <Stack spacing={3}>
          <TextField
            id="name"
            label="Name"
            variant="standard"
            onChange={onChangeName}
          />
          <TextField
            id="description"
            label="Description"
            variant="standard"
            onChange={onChangeDescription}
          />
          <Button variant="contained" onClick={handleSubmit}>Add</Button>
        </Stack>
      </form>
    </div>
  )
}

