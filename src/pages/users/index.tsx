import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import axios from 'axios';
import { FormEvent, useState, useEffect } from 'react'
import styles from '@/styles/Home.module.css'

import User from '@/components/User';

export default function Assets() {

  const [assets, setAssets] = useState<any[]>([])

  useEffect(() => {
    axios.get("https://my-json-server.typicode.com/tractian/fake-api/users")
    .then((response) => {
      console.log(response.data)
      setAssets(response.data)
    })
    .catch(() => {
      console.log("Algo deu errado")
    })
  },[])


  return (
    <>
      <Head>
        <title>Colaboradores</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>

        <div className={styles.title}>
          <Link
            href="/"
          >
            <Image
              src="/logo.png"
              alt="Logo"
              width={200}
              height={30}
              priority
            />
          </Link>
        </div>

        <div className={styles.grid}>
          {assets.map((user, key) => {
            
            let company = ''
            let unit = ''

            user.companyId === 1 ? company = 'The Test Company' : company = 'Não encontrado'

            if (user.unitId === 1){
              unit = 'Jaguar Unit'
            }
            if (user.unitId === 2){
              unit = 'Tobias Unit'
            }

            return(
              <div key={key}>
                <User name={user.name} email={user.email} company={company} unit={unit} path={user.email}></User>
              </div>
            )

          })}
        </div>

      </main>
    </>
  )
}
