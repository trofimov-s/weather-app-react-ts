import { ChangeEvent, FC } from 'react';
import './Input.scss';
import Icon from '../Icon';

type Props = {
  label: string;
  name: string;
  onChangeHanlder?: (e: ChangeEvent<HTMLInputElement>) => void;
  icon?: string;
  btnType?: 'submit' | 'button';
};

const Input: FC<Props> = ({ icon, onChangeHanlder, label, name, btnType }) => {
  return (
    <div className="input-field">
      <input type="text" required placeholder=" " name={name} onChange={onChangeHanlder} />
      <label>{label}</label>
      {icon && (
        <button className={`icon-btn ${btnType && '!cursor-pointer'}`} type={btnType}>
          <Icon icon={icon} extendedClass="input-icon" />
        </button>
      )}
    </div>
  );
};

export default Input;
