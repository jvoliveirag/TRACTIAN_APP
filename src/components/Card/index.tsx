import { Inter } from 'next/font/google'
import Link from 'next/link'
import { FaArrowRight } from "react-icons/fa";

import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Card({ title, description, path }: {title: string; description: string; path: string}) {
  return (
    <Link
      href={path}
      className={styles.card}
    >
      <h2 className={inter.className}>
        {title} <span><FaArrowRight color="white" size={16} /></span>
      </h2>
      <p className={inter.className}>
        {description}
      </p>
    </Link>
  )
}