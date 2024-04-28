import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import './Form.scss';

interface FormProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleDelete: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  isDisabled: boolean;
  newTag: string;
  tags: string[];
}

export const Form: React.FC<FormProps> = ({ handleChange, handleSubmit, handleDelete, isDisabled, newTag, tags }) => {

  const isFalse = tags.length === 0;

  return (
    <form className="form">
      <Input handleChange={handleChange} newTag={newTag} />
      <Button name="Add" onClick={handleSubmit} disabled={isDisabled} />
      <Button name="Delete" onClick={handleDelete} disabled={isFalse} />
    </form>
  )
}