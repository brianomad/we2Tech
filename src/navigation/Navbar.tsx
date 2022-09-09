import { ReactNode } from 'react';

import styles from '../styles/navbar.module.css';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const Navbar = (props: INavbarProps) => (
  <div className="flex flex-wrap justify-between items-center">
    <div>
      <a>{props.logo}</a>
    </div>

    <nav>
      <ul
        className={
          (styles.navbar, 'flex items-center font-medium text-xl text-gray-800')
        }
      >
        {props.children}
      </ul>
    </nav>
  </div>
);

export { Navbar };
