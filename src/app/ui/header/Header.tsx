"use client";
import styles from "./header.module.css";

import { Button } from "../button/Button";
import { theme } from "../theme";
import Image from "next/image";
import { Menu } from "./Menu";
import { MenuMobile } from "./Mobile";
import { BurgerButton } from "./BurgerButton";

export const Header = () => {
  return (
    <>
      <BurgerButton />
      <header className={styles.header}>
        <Image src="/l2.svg" width={100} height={50} unoptimized alt="Logo" />
        <Menu />
        <Button bcgcolor={theme.color.buttonBg} href="/">
          Личный кабинет
        </Button>
      </header>
    </>
  );
};
