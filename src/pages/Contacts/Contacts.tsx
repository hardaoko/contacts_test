import { Grid } from '@mui/material';
import { useMemo, useState} from 'react';
import { ContactForm } from '../../components/AddContact/ContactForm';
import { ContactCard } from '../../components/ContactCard/ContactCard';
import { HeaderBar } from '../../components/HeaderBar/HeaderBar';
import { Modal } from '../../components/Modal/Modal';
import { deleteContact, MODAL_CLOSE, MODAL_OPEN } from '../../services/actions/contacts';
import { useMyDispatch, useMySelector } from '../../utils/types';
import AddIcon from '@mui/icons-material/Add';
import './Contacts.css'

export const Contacts = () => {
  const { contacts,
    contactDetails,
    modalVisible } = useMySelector((store) => store.contacts);
  const [ search, setSearch ] = useState("");
  const dispatch = useMyDispatch()

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const openModal = () => {
    dispatch({ type: MODAL_OPEN, payload: null});
  };

  const closeModal = () => {
    dispatch({ type: MODAL_CLOSE });
  };

  const modal = (
    <Modal onClose={closeModal}>
      {
        contactDetails === null ?
        <ContactForm closeModal={closeModal} isEdit={false} /> :
        <ContactForm closeModal={closeModal} isEdit={true}
          contact={contactDetails}/>
      }
    </Modal>
  );

  const ContactsList = useMemo(() => {
    return (
      <>
        {contacts.length > 0 && (
          <Grid container spacing={3} justifyContent='center'>
            {contacts.filter((contact) =>
              contact.name?.toUpperCase().includes(search.toUpperCase()))
              .map((item) => {
                return (
                <Grid item key={item.id}>
                  <ContactCard
                    contact={item}
                    editModal={() => {dispatch({type: MODAL_OPEN, payload: item})}}
                    deleteContact={() => {dispatch(deleteContact(item.id))}}
                  />
                </Grid>)
              })}
          </Grid>
        )}
      </>
    )
  }, [search, contacts, dispatch])

  return (
    <>
      <HeaderBar onChangeSearch={onChangeSearch} />
      <main className='main_container'>
        <div className='contacts_container'>

          {modalVisible && modal}

          {ContactsList}

          <div className="button_wrapper" onClick={openModal}>
            <AddIcon/>
          </div>
        </div>
      </main>
    </>
  )
}

