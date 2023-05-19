import  { useState } from 'react';
import Button from './Button';
import Checkbox from './Checkbox';


type TodoRowProps = {
  label: string;
  onDelete: () => void;
};

const TodoRow = ({ label, onDelete }: TodoRowProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleDeleteClick = () => {
    onDelete();
  };

  return (
    <div className=' m-1 p-2'  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <Checkbox label={label} onChange={handleCheckboxChange} checked={isChecked} />
      {isHovered && <Button onClick={handleDeleteClick} >x</Button>}
    </div>
  );
};

export default TodoRow;