import { FC } from 'react';

type Props = {
  icon: string;
  extendedClass?: string;
  clickHanlder?: () => void;
};

const Icon: FC<Props> = ({ icon, extendedClass = '', clickHanlder }) => {
  return (
    <span className={`material-symbols-outlined ${extendedClass}`} onClick={clickHanlder}>
      {icon}
    </span>
  );
};

export default Icon;
