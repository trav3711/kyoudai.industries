import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/layout.module.css'
import utilStyles from '../styles/utils.module.css'

const japanese_name = '兄弟事業'
const english_name = 'Kyoudai Industries'
export const siteTitle = 'Kyoudai Industries'

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {home ? (
          <>
            <div className={styles.headerHomeImage}>
              <Image
                src='/../public/images/header_stamp.png'
                alt='header stamp'
                width={600}
                height={700}
              />
            </div>
            <h1 className={utilStyles.headingXl}>{english_name}</h1>
            <nav>
                <Link href="/about">
                  <a className={styles.nav_link}>About</a>
                </Link>
                <Link href="/developers">
                  <a className={styles.nav_link}>Developers</a>
                </Link>
                <Link href="/projects">
                  <a className={styles.nav_link}>Projects</a>
                </Link>
                <Link href="/contact">
                  <a className={styles.nav_link}>Contact</a>
                </Link>
            </nav>
          </>
        ) : (
          <>
          <div className={styles.headerImage}>
            <Link href="/">
              <Image
                src='/../public/images/header_stamp.png'
                alt='header stamp'
                width={600}
                height={700}
              />
            </Link>
          </div>
            <nav>
                <Link href="/about">
                  <a className={styles.nav_link}>About</a>
                </Link>
                <Link href="/developers">
                  <a className={styles.nav_link}>Developers</a>
                </Link>
                <Link href="/projects">
                  <a className={styles.nav_link}>Projects</a>
                </Link>
                <Link href="/contact">
                  <a className={styles.nav_link}>Contact</a>
                </Link>
            </nav>
          </>
        )}
      </header>
      <main>{ children }</main>
    </div>
  )
}
