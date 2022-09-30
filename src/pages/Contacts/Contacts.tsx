import { Grid } from '@mui/material';
import { useState } from 'react';
import { AddContact } from '../../components/AddContact/AddContact';
import { ContactCard } from '../../components/ContactCard/ContactCard';
import { HeaderBar } from '../../components/HeaderBar/HeaderBar';
import {Modal} from '../../components/Modal/Modal';
import { MODAL_CLOSE, MODAL_OPEN } from '../../services/actions/contacts';
import { useMyDispatch, useMySelector } from '../../utils/types';
import './Contacts.css'

export const Contacts = () => {
  const { contacts, modalVisible } = useMySelector((store) => store.contacts);
  const [search, setSearch] = useState("");

  const dispatch = useMyDispatch()

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

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
    <div className='main_container'>
      <HeaderBar onChangeSearch={onChangeSearch} />
      <main className='contacts_container'>

        {modalVisible && modal}

        <div className="button_wrapper" onClick={openModal}>
          <button>+</button>
        </div>

        {contacts.length > 0 && (
          <Grid container spacing={3} justifyContent='center'>
            {contacts.map((item) => {
              return (
              <Grid item key={item.id}>
                <ContactCard name={item.name} description={item.description}/>
              </Grid>)
            })}
          </Grid>
        )}

      </main>
    </div>
  )
}

