import {useEffect} from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { getContacts } from '../../services/actions/contacts';
import { AppDispatch, useMyDispatch } from '../../utils/types';
import { ModalSwitch } from '../ModalSwitch/ModalSwitch';
import './App.css';

function App() {
  const dispatch: AppDispatch = useMyDispatch();

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
