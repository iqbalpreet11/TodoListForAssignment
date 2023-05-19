import React from 'react';


type ButtonProps = {
  
  onClick: () => void;
  children: React.ReactNode;
};

const Button = ({ onClick, children }: ButtonProps) => {
  

  return (
    <button className='bg-green-700 text-white mx-16 float-right  px-3 pb-1 rounded-md' onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;