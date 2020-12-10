import Head from 'next/head'
import Link from 'next/link'
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'

const japanese_name = '兄弟事業'
const english_name = 'Kyoudai Industries'
export const siteTitle = 'Kyoudai Industries'

export default function Layout({ home }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {home ? (
          <>
            <h1 className={utilStyles.heading2Xl}>{japanese_name}</h1>
            <h1 className={utilStyles.heading2Xl}>{english_name}</h1>
          </>
        ) : (
          <>
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{english_name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
    </div>
  )
}
