import { Grid } from '@mui/material';
import React from 'react';
import { AddContact } from '../../components/AddContact/AddContact';
import { ContactCard } from '../../components/ContactCard/ContactCard';
import {Modal} from '../../components/Modal/Modal';
import { MODAL_CLOSE, MODAL_OPEN } from '../../services/actions/contacts';
import { useMyDispatch, useMySelector } from '../../utils/types';
import './Contacts.css'

export const Contacts = () => {
  const { contacts, modalVisible } = useMySelector((store) => store.contacts);
  const dispatch = useMyDispatch()

  //  Открытие модального окна
  const openModal = () => {
    dispatch({ type: MODAL_OPEN });
  };

  const closeModal = () => {
    dispatch({ type: MODAL_CLOSE });
  };

  const modal = (
    <Modal onClose={closeModal}>
      <AddContact/>
    </Modal>
  );

  return (

    <div className='contacts_container'>
      {modalVisible && modal}
      {contacts.length > 0 && (
        <Grid container spacing={3}>
          {contacts.map((item) => {
            return (<Grid item>
              <ContactCard name={item.name} description={item.description}/>
            </Grid>)
          })}
          <Grid item alignSelf={'center'}>
            <div className="button_wrapper" onClick={openModal}>
              <button>+</button>
            </div>
          </Grid>
        </Grid>
      )}
    </div>
  )
}

