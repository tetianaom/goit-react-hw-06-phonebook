import React from 'react';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactListCss } from './ContactList.styled';
import { getContacts } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import { useSelector } from 'react-redux';

export const ContactList = () => {
  const contacts = useSelector(getContacts);

  const filter = useSelector(getFilter);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <>
      <ContactListCss>
        {contacts.length > 0 &&
          visibleContacts.map(contact => (
            <div key={contact.id}>
              <ContactItem
                id={contact.id}
                name={contact.name}
                number={contact.number}
              />
            </div>
          ))}
      </ContactListCss>
    </>
  );
};
