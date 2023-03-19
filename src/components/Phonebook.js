import styled from '@emotion/styled'
import { useState } from "react";
import { nanoid } from 'nanoid';

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addContact } from "../redux/contactSlice";
import { getVisibleFilter } from "../redux/selectors";
// import PropTypes from 'prop-types';

export default function Phonebook () {
    const initialState = {
      name: "",
      number: "",
    };
  const contacts = useSelector(getVisibleFilter);
  const dispatch = useDispatch();

  const [state, setState] = useState({ ...initialState });
  const { name, number } = state;

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  const onAddContacts = (payload) => {
    const existingContact = contacts.find(
      (el) => el.name.toLocaleLowerCase() === payload.name.toLocaleLowerCase()
    );
    if (existingContact) {
      alert(`${payload.name} is already in your contacts`);
      return;
    }
    dispatch(addContact(payload));
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddContacts({ ...state });
    setState({ ...initialState });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor={nameInputId}>
          Name
          <Input
            type="text"
            value={name}
            onChange={handleChange}
            name="name"
            id={nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>

        <Label htmlFor={numberInputId}>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            id={numberInputId}
            onChange={handleChange}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <button type="submit" style={{ marginTop: "10px" }}>
          Add contact
        </button>
      </Form>
    </div>
  );
};


// Phonebook.propTypes = {
//     onSubmit: PropTypes.func.isRequired,
// }



/////////////////////////////// STYLE /////////////////////////

const Form = styled.form`
  border: 1px solid;
  width: 300px;
  padding: 20px;
`

const Label = styled.label`
  display: block;
  margin-bottom: 0.25rem; 
`

const Input = styled.input`
  display: block;
  font-family: inherit;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #bdbdbd;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`