import styled from '@emotion/styled';
// import PropTypes from 'prop-types';
import { useDispatch, useSelector } from "react-redux";
import { getVisibleFilter } from "../redux/selectors";
import { removeContact } from "../redux/contactSlice";
// import toast from "react-hot-toast";

export const ContactList = ({ DeleteContact }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleFilter);

  const onRemoveContacts = (payload) => {
    dispatch(removeContact(payload));
  };


  return (
    <ContactListStyle>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <p>
            {name} : {number}
          </p>
          <Button type="button" onClick={() => onRemoveContacts(id)}>
            Delete
          </Button>
        </ContactItem>
      ))}
    </ContactListStyle>
  );
};

// ContactList.propTypes = {
//   visibleFilter: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     }).isRequired
//   ),
//   onDeleteContact: PropTypes.func,
// };

/////////////////////////////// STYLE /////////////////////////

const Button = styled.button`
  background: transparent;
  background-color: transparent;
  margin-left: 10px;
  border: 1px solid;
  border-radius: 10px;
  font-size: 10px;
`;

const ContactListStyle = styled.ul`
  list-style: none;
`;

const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: baseline;
`;