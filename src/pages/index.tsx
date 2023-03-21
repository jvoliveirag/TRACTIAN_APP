import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Card from '@/components/Card'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Monitoramento</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>

          <div>
            <a
              href="https://tractian.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/logo.png"
                alt="Logo"
                width={100}
                height={100}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>

        </div>

        <div className={styles.grid}>

          <Card title="Ativos" description="Veja os usuários do sistema." path="asset"></Card>

          <Card title="Unidades" description="Monitore informações dos ativos em tempo real." path="companies"></Card>

          <Card title="Atividades" description="Confira ordens de trablho, seus status e asignees." path="workorders"></Card>

          <Card title="Colaboradores" description="Veja os usuários do sistema." path="users"></Card>

        </div>
      </main>
    </>
  )
}
