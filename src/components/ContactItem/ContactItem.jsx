import React from 'react';
import PropTypes from 'prop-types';
import { BtnAddContact } from '../ContactForm/ContactForm.styled';
import { ContactItemCss } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <ContactItemCss>
      <p>
        {name}: {number}
      </p>
      <BtnAddContact onClick={() => dispatch(deleteContact(id))}>
        Delete
      </BtnAddContact>
    </ContactItemCss>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
