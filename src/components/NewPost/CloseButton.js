/**
 * Component to render the close button in the new post editor
 * @author Yousef Elshabrawy
 *
 * @component
 */
/* eslint-disable func-names */
import React from 'react';
import { useHistory } from 'react-router-dom';
import classes from './CloseButton.module.scss';

const CloseButton = function () {
  const history = useHistory();
  const closeClickHandler = () => {
    history.push('/dashboard');
  };
  return (
    <button type='button' className={classes.close} onClick={closeClickHandler}>
      Close
    </button>
  );
};

export default CloseButton;
