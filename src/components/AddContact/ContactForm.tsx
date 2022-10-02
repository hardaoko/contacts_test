import {FC, useState} from 'react'
import './ContactForm.css'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { IAddContactProps, useMyDispatch, useMySelector } from '../../utils/types';
import { addContact, editContact } from '../../services/actions/contacts';

export const ContactForm: FC<IAddContactProps> = ({closeModal, isEdit, contact}) => {
  const [name, setName] = useState(contact !== undefined ? isEdit && contact.name : '');
  const [description, setDescription] = useState(contact !== undefined ? isEdit && contact.description : '');


  const dispatch = useMyDispatch();
  const {addContactFailed, editContactFailed} = useMySelector((store) => store.contacts)

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    if (isEdit === true) {
      dispatch(editContact(contact?.id, name, description))
      !editContactFailed && closeModal();
    }
    else{
      dispatch(addContact(name, description));
      !addContactFailed && closeModal();
    }
  };

  return (
    <div>
      <h2 className='header_title'>
        {isEdit ? 'Edit contact' : 'Add contact'}
      </h2>
      <form>
        <Stack spacing={3} sx={{ width: 300 }}>
          <TextField
            id="name"
            label="Name"
            variant="standard"
            onChange={onChangeName}
            value={name}
          />
          <TextField
            id="description"
            label="Description"
            variant="standard"
            onChange={onChangeDescription}
            value={description}
          />
          <Button variant="contained" onClick={handleSubmit}>{isEdit ? 'Save' : 'Add'}</Button>
        </Stack>
      </form>
    </div>
  )
}

