import Link from "next/link";
import styles from "./header.module.css";

export const Menu = (props: props) => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menuList}>
        <li>
          <Link href="/" className={styles.link}>
            Главная
          </Link>
        </li>
        <li>
          <Link href="/connection" className={styles.link}>
            Подключение
          </Link>
        </li>
        <li>
          <Link href="/concept" className={styles.link}>
            Концепция
          </Link>
        </li>
      </ul>
    </nav>
  );
};
