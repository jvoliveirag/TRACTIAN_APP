import { FaCircle, FaHome } from "react-icons/fa";
import Link from 'next/link'

import styles from '@/styles/Home.module.css'
import Image from 'next/image'

function Sidebar({ path1, name1, path2, name2, path3, name3 }: {
    path1: string; path2: string; path3: string, name1: string, name2: string, name3: string}) {
    
    return (
        <div>
            <div className={styles.sidebar}>
                
                <br></br>
                <Link
                    href="https://tractian.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={200}
                        height={30}
                        priority
                    />
                </Link>
                <br></br>

                <Link href="/">
                    <FaHome color="white" size={20} />
                    <p className={styles.code}>Página inicial</p>
                </Link>
                <Link href={path1}>
                    <FaCircle color="white" size={10} />
                    <p className={styles.code}>{name1}</p>
                </Link>
                <Link href={path2}>
                    <FaCircle color="white" size={10} />
                    <p className={styles.code}>{name2}</p>
                </Link>
                <Link href={path3}>
                    <FaCircle color="white" size={10} />
                    <p className={styles.code}>{name3}</p>
                </Link>
                <br></br>
                <br></br>
            </div>

        </div>

    )
}

export { Sidebar }