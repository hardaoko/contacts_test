import {useEffect} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { getContacts } from '../../services/actions/contacts';
import { AppDispatch, useMyDispatch, useMySelector } from '../../utils/types';
import { ModalSwitch } from '../ModalSwitch/ModalSwitch';
import './App.css';

function App() {
  const dispatch: AppDispatch = useMyDispatch();
  const { contacts } = useMySelector((store) => store.contacts);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <Router>
      <ModalSwitch />
    </Router>
  );
}

export default App;
