import { FC, PropsWithChildren } from 'react';
import './Card.scss';

type Props = {
  selected?: boolean;
  extendedClass?: string;
};

const Card: FC<PropsWithChildren<Props>> = ({ children, selected, extendedClass }) => {
  return <div className={`card${selected ? ' selected' : ''} ${extendedClass}`}>{children}</div>;
};

export default Card;
