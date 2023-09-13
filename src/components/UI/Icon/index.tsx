import { FC } from 'react';

type Props = {
  icon: string;
  extendedClass?: string;
  clickHanlder?: () => void;
};

const Icon: FC<Props> = ({ icon, extendedClass = '', clickHanlder }) => {
  const hanldeClick = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    clickHanlder();
  };

  return (
    <span className={`material-symbols-outlined ${extendedClass}`} onClick={hanldeClick}>
      {icon}
    </span>
  );
};

export default Icon;
