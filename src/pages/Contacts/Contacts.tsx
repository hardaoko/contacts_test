import { Grid } from '@mui/material';
import { ContactCard } from '../../components/ContactCard/ContactCard';
import { useMySelector } from '../../utils/types';
import './Contacts.css'

export const Contacts = () => {
  const { contacts } = useMySelector((store) => store.contacts);

  return (
    <div className='contacts_container'>
      {contacts.length > 0 && (
        <Grid container spacing={3}>
          {/* {contacts.map((item) => {
            <Grid item>
              <ContactCard name={item.name} description={contact.description}/>
            </Grid>
          })} */}

        </Grid>
      )}
    </div>
  )
}

