import React from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';

// http://djorg83.github.io/react-bootstrap-sweetalert/
const Alert = ({ children, title, show, onConfirm, onCancel, ...rest }) => {
  return (
    <SweetAlert title={title} show={show} onConfirm={onConfirm} onCancel={onCancel} {...rest}>
      {children}
    </SweetAlert>
  );
};

Alert.defaultProps = {
  title: '',
  show: false,
  onConfirm: () => {},
  onCancel: () => {},
};

export default Alert;
