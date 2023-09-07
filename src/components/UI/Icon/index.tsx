import { FC } from 'react';

type Props = { icon: string; fontSize?: string };

const Icon: FC<Props> = ({ icon, fontSize = '24px' }) => {
  return (
    <span style={{ fontSize }} className="material-symbols-outlined">
      {icon}
    </span>
  );
};

export default Icon;
