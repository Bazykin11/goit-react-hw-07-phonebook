import styled from '@emotion/styled';


 const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ContactListStyle>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          <p>
            {name} : {number}
          </p>
          <Button type="button" onClick={() => deleteContact(id)}>
            Delete
          </Button>
        </ContactItem>
      ))}
    </ContactListStyle>
  );
};



export default ContactList

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