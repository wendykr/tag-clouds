import './Input.scss';

interface InputProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  newTag: string;
}

export const Input: React.FC<InputProps> = ({ handleChange, newTag }) => {
  return (
    <label className="input__label">
      <p className="input__label--name">Tag name: </p>
      <input className="input__field" value={newTag} name="name" onChange={handleChange} />
    </label>
  )
}