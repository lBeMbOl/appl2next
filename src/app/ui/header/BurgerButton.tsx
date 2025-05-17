// BurgerButton.tsx
import { useState } from "react";
import { MenuMobile } from "./Mobile";
import styles from "./burgerButton.module.css";

export const BurgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <button
        className={`${styles.burgerButton} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <span className={styles.burgerIcon} />
      </button>

      {isOpen && (
        <>
          <div className={styles.overlay} onClick={closeMenu} />
          <div className={styles.popupContent}>
            <MenuMobile close={closeMenu} />
            <button
              className={styles.closeButton}
              onClick={closeMenu}
              aria-label="Close"
            >
              <CloseIcon />
            </button>
          </div>
        </>
      )}
    </>
  );
};

const CloseIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 6L6 18M6 6L18 18"
      stroke="#f00f0f"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
