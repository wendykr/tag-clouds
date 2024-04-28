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
  return (
    <form className="form">
      <label className="form__label">
        <p className="form__label--name">Tag name: </p>
        <input className="form__field" value={newTag} name="name" onChange={handleChange} />
      </label>
      <button className="button" type="submit" onClick={handleSubmit} disabled={isDisabled}>Add</button>
      <button className="button" type="submit" onClick={handleDelete} disabled={tags.length === 0}>Delete</button>
    </form>
  )
}