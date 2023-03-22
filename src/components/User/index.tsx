import { Inter } from 'next/font/google'
import Link from 'next/link'

import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Card({ name, email, company, unit, path }: {name: string; email: string; company: string; unit: string; path: string}) {
    return (
        <Link
            href={path}
            className={styles.user}
        >
            <h2 className={inter.className}>
                {name} <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
                Email: {email}
            </p>
            <p className={inter.className}>
                Empresa: {company}
            </p>
            <p className={inter.className}>
                Unidade: {unit}
            </p>
        </Link>
    )
}