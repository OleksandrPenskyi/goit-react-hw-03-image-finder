import React from 'react';

const Button = ({ onBtnClick }) => {
  return (
    <button onClick={onBtnClick} type="button" className="Button">
      Load more
    </button>
  );
};

export default Button;
