import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.background}>
        <div className={styles.content}>
          <div>
            <Image src="/images/profile.png" alt="Foto de Perfil" width={120} height={120} className={styles.profileImage}/>
          </div>
          <div className={styles.information}>
            <h2 className={styles.title}>Um pouco mais sobre mim</h2>
          </div>
        </div>
      </div>
    </div>
  )
}