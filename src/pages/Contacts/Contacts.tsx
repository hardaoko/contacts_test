import {useEffect} from 'react'
import { getContacts } from '../../services/actions/contacts';
import { AppDispatch, useMyDispatch, useMySelector } from '../../utils/types';
import './Contacts.css'

export const Contacts = () => {
  const dispatch: AppDispatch = useMyDispatch();
  const { contacts } = useMySelector((store) => store.contacts);

  useEffect(() => {
    dispatch(getContacts());
    console.log("contacts", contacts)
  }, [dispatch]);

  return (
    <div>KFKF</div>
  )
}

