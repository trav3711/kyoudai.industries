import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'

const japanese_name = '兄弟事業'
const english_name = 'Kyoudai Industries'
export const siteTitle = 'Kyoudai Industries'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={utilStyles.headingXl} title={japanese_name}>{english_name}</h1>
        <nav>
          <Link href="/about" className={styles.nav_link}>About</Link>
          <Link href="/developers" className={styles.nav_link}>Developers</Link>
          <Link href="/projects" className={styles.nav_link}>Projects</Link>
          <Link href="/contact" className={styles.nav_link}>Contact</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}
