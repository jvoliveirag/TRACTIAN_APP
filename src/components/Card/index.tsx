import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Card({ title, description, path }: {title: string; description: string; path: string}) {
    return (
        <a
            href={path}
            className={styles.card}
        >
        <h2 className={inter.className}>
          {title} <span>-&gt;</span>
        </h2>
        <p className={inter.className}>
          {description}
        </p>
      </a>
    )
}