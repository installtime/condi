"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Dropdown.module.css";

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

export function Dropdown({
  button,
  children,
  isOpen,
  onOpen = NOOP,
  onClose = NOOP,
}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(isOpen);

  useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);

  //   const ref = useRef(null);

  //   useEffect(() => {
  //     const clickOnDropdown = (e: MouseEvent) => {
  //       if (ref.current && ref.current.contains(e.target as Node)) {
  //         console.log("1: ", ref.current);
  //         console.log("2: ", e.target);

  //         setIsDropdownOpen(true);
  //       }
  //     };

  //     document.addEventListener("click", clickOnDropdown);

  //     return () => document.removeEventListener("click", clickOnDropdown);
  //   }, [isDropdownOpen, onOpen, onClose]);

  useEffect(() => {
    if (isDropdownOpen) {
      onOpen();
    } else {
      onClose();
    }
  }, [isDropdownOpen, onOpen, onClose]);

  const handleOpen = () => {
    if (isOpen === undefined) {
      setIsDropdownOpen((prevState) => !prevState);
    }
  };

  return (
    <div>
      <div
        onClick={handleOpen}
        aria-expanded={isDropdownOpen}
        aria-haspopup="true"
      >
        {button}
      </div>
      {isDropdownOpen && (
        <div>
          <div onClick={() => setIsDropdownOpen(false)}>{children}</div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
