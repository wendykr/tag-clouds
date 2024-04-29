import './Button.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabled: boolean;
  name: string;
}

export const Button: React.FC<ButtonProps> = ({ name, onClick, disabled }) => {
  return (
    <button className="button" type="submit" onClick={onClick} disabled={disabled}>{name}</button>
  )
}