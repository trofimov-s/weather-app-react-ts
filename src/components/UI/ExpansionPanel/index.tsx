import { FC, PropsWithChildren, useState } from 'react';

import Icon from '../Icon';
import './ExpansionPanel.scss';

type Props = {
  title: string;
};

const ExpansionPanel: FC<PropsWithChildren<Props>> = ({ children, title }) => {
  const [expanded, setExpanded] = useState(false);
  const [contentIsVisible, setContentIsVisible] = useState(false);

  const expansionHanlder = () => {
    setExpanded((curr) => !curr);

    if (contentIsVisible) {
      setTimeout(() => setContentIsVisible(false), 300);
    } else {
      setContentIsVisible(true);
    }
  };

  return (
    <section className={`expansion-panel${expanded ? ' active' : ''}`}>
      <header className="expansion-panel__header" onClick={expansionHanlder}>
        <h3 className="expansion-panel__title">{title}</h3>
        <Icon extendedClass="caret text-gray-700" icon="expand_more" />
      </header>
      <main className="expansion-panel__content">{contentIsVisible && children}</main>
    </section>
  );
};

export default ExpansionPanel;
