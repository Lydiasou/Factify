import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

interface FlashProps {
  type: 'success' | 'warning' | 'danger';
  message: string;
}

const Flash: React.FC<FlashProps> = ({ type, message }) => {
  let borderColor = '';
  switch (type) {
    case 'success':
      borderColor = '#1EDD88';
      break;
    case 'warning':
      borderColor = '#FFC65A';
      break;
    case 'danger':
      borderColor = '#FD1015';
      break;
    default:
      borderColor = '';
  }

  const handleClose = () => {
    const flashElement = document.querySelector(`.flash-${type}`);
    if (flashElement) {
      flashElement.classList.remove('show');
    }
  };

  return (
    <div className={`flash flash-${type} alert alert-dismissible fade show`} role="alert" style={{ border: `2px solid ${borderColor}` }}>
      <span><strong>{message}</strong></span>
      <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}>
      </button>
    </div>
  );
};

export default Flash;
