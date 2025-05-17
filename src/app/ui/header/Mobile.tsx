// Mobile.tsx
import styles from "./mobile.module.css";
import Link from "next/link";

type Props = {
  close: () => void;
};

export const MenuMobile = ({ close }: Props) => {
  return (
    <nav className={styles.menu}>
      <ul className={styles.menuList}>
        <li>
          <Link href="/" className={styles.menuLink} onClick={close}>
            Главная
          </Link>
        </li>
        <li>
          <Link href="/account" className={styles.menuLink} onClick={close}>
            ЛК
          </Link>
        </li>
        <li>
          <Link href="/connection" className={styles.menuLink} onClick={close}>
            Подключение
          </Link>
        </li>
        <li>
          <Link href="/concept" className={styles.menuLink} onClick={close}>
            Концепция
          </Link>
        </li>
      </ul>
    </nav>
  );
};
