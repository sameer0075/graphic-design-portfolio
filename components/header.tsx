import Link from "next/link";
import { FaBehance, FaGithub, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";

import styles from "../styles/header.module.scss";
import commonStyles from "../styles/common.module.scss";

type HeaderProps = {
  logoLink: string;
};

export default function Header({ logoLink }: HeaderProps) {
  return (
    <header>
      <nav className={styles.nav}>
        <div className={styles.spaceBetween}>
          <Link href={logoLink} className={styles.logo}>
            KB
          </Link>
          <ul className={styles.navList}>
            <li>
              <a
                href="https://drive.google.com/file/d/1PgvpHThs5XjTwGZgib9ZTVLa8QbhulWp/view?usp=sharing"
                title="Download Khadija's Resume"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="https://pin.it/2NDBMG68v"
                title="Go to Khadija's GitHub"
              >
                <FaPinterest />
                <span className={commonStyles.hiddenText}>Pinterest</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/enchant_design_studio_223?igsh=MTY2MTlvbnhzenp4dQ=="
                title="Connect with Khadija on Instagram"
              >
                <FaInstagram />
                <span className={commonStyles.hiddenText}>Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
