import styled from '@emotion/styled';
import Phonebook from './Phonebook';
import ContactList from './ContactList';
import Filter from './Filter';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { addContact, deleteContact, fecthContacts } from 'redux/api';
import { getVisibleFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleFilter);

  useEffect(() => {
    dispatch(fecthContacts());
  }, [dispatch]);

  const addNewContact = payload => {
    const checkContact = contacts.find(
      el => el.name.toLocaleLowerCase() === payload.name.toLocaleLowerCase()
    );
    if (checkContact) {
      return alert(`${payload.name} is already in the contact list`);
    }
    dispatch(addContact(payload));
  };

  const onRemoveContacts = payload => {
    dispatch(deleteContact(payload));
  };

  const onSetFilter = ({ target }) => {
    dispatch(setFilter(target.value));
  };

  return (
    <Container>
      <Phonebook onSubmit={addNewContact} />
      <h2>Contacts </h2>
      <Filter onChangeFilter={onSetFilter} />
      <ContactList contacts={contacts} deleteContact={onRemoveContacts} />
    </Container>
  );
}

const Container = styled.div`
  padding: 50px;
  border: 1px solid;
  width: 400px;
`;
