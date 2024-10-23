import { motion } from "framer-motion";
import styles from "./Header.module.css";

function Header() {
  return (
    <motion.h1
      className={styles.title}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      Mon Portfolio
    </motion.h1>
  );
}

export default Header;
