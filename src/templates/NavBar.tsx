import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Navbar } from '../navigation/Navbar';
import styles from '../styles/navbar.module.css';
import { Logo } from './Logo';

const NavBar = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <Navbar logo={<Logo xl />}>
        <li className={styles.navbarButton}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className={styles.navbarButton}>
          <Link href="/">
            <a>Services</a>
          </Link>
        </li>
        <li className={styles.navbarButton}>
          <Link href="/">
            <a>How we work</a>
          </Link>
        </li>
        <li className={styles.navbarButton}>
          <Link href="/">
            <a>Contact us</a>
          </Link>
        </li>
      </Navbar>
    </Section>

    {/* <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'The modern landing page for\n'}
            <span className="text-primary-500">React developers</span>
          </>
        }
        description="The easiest way to build a React landing page in seconds."
        button={
          <Link href="https://creativedesignsguru.com/category/nextjs/">
            <a>
              <Button xl>Download Your Free Theme</Button>
            </a>
          </Link>
        }
      />
    </Section> */}
  </Background>
);

export { NavBar };
