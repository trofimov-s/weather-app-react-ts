import { FC } from 'react';
import './Footer.scss';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <p>
        Developed by&nbsp;
        <a
          className="social-link"
          rel="noreferrer noopener"
          target="_blank"
          href="https://www.linkedin.com/in/serhii-trofimov-2715131aa"
        >
          Serhii Trofimov
        </a>
      </p>
    </footer>
  );
};

export default Footer;
