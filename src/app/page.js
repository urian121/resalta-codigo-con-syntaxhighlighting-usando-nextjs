import CopyContent from "./components/CopyContent";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Implementación de Syntax Highlighting en Next.js para Resaltar Código</h1>
      <div className={styles.center}>
        <Image className={styles.logo} src="/next.svg" alt="Next.js Logo" width={180} height={37} priority />
      </div>
      <CopyContent />
    </main>
  );
}
