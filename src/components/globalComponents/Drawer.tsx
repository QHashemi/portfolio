import React, { ReactNode } from 'react';
import styles from "./style.module.scss";
import { IoMdClose } from "react-icons/io";

type Props = {
  content: ReactNode;
  title: string;
  
  opened: boolean;          // <-- controlled state
  onClose: () => void;      // <-- function to close
};

export default function Drawer({ content, title, opened, onClose }: Props) {
  return (
    <div
      className={`${styles.drawer} ${opened ? styles.open : ""}`}
      id="drawer"
    >
      <div className={styles.drawer_header}>
        <div>{title}</div>
        <IoMdClose onClick={onClose} />
      </div>
      {content}
    </div>
  );
}
