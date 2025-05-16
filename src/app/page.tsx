import Image from "next/image";
import styles from "./page.module.css";
import { MyDropdown } from "./ui/radix-component";

export default function Home() {
  return (
    <div className={styles.page}>
      <MyDropdown />
    </div>
  );
}
