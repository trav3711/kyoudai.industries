import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from './layout.module.css'
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
          </>
        ) : (
          <>
            <h2 className={utilStyles.heading2Xl}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{japanese_name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{ children }</main>
    </div>
  )
}
