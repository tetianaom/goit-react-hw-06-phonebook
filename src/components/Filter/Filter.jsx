import React from 'react';
import { InputCreateForm } from 'components/ContactForm/ContactForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter, updateFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(updateFilter(event.currentTarget.value));
  };

  return (
    <label>
      Find contacts by name
      <InputCreateForm type="text" value={filter} onChange={changeFilter} />
    </label>
  );
};
