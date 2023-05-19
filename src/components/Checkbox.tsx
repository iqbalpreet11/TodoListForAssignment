import React from 'react';


type CheckboxProps = {
  label: string;
  onChange: (checked: boolean) => void;
  checked: boolean;
};



const Checkbox = ({ label, onChange, checked }: CheckboxProps) => {
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.checked);
  };



 

  return (
    <label  >
      <input type="checkbox"  
      className='appearance-none bg-gray-200
     checked:bg-green-700 w-4 h-4 rounded-lg ' 
       checked={checked} onChange={handleCheckboxChange} />
      <span className="m-2">{label}</span>
    </label>
  );
};

export default Checkbox
