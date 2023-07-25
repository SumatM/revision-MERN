import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcom to Next.js Project</h1>
      <Link href="/login">
        <button> Loin Page</button>
      </Link>
    </main>
  );
}
