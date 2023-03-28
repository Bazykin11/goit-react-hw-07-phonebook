import styled from '@emotion/styled';
import Phonebook from './Phonebook';
import ContactList from './ContactList';
import Filter from './Filter';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { fecthContacts } from 'redux/api';



export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fecthContacts());
  }, [dispatch]);

  return (
    <Container>
      <Phonebook />
      <h2>Contacts </h2>
      <Filter />
      <ContactList />
    </Container>
  );
}

const Container = styled.div`
  padding: 50px;
  border: 1px solid;
  width: 400px;
`;
