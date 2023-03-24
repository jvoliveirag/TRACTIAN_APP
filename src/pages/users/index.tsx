import Head from 'next/head'
import { toast } from 'react-toastify';

//import axios from 'axios';
import { useState, useEffect } from 'react'
import styles from '@/styles/Home.module.css'

import User from '@/components/User';
import ClientUsers from '@/services/users';
import Sidebar from '@/components/Sidebar';

export default function Users() {

  const [id, setId] = useState<any>();

  const [users, setUsers] = useState<any[]>([])

  async function handleFilter(e:any) {
    e.preventDefault();
    const response:any = await ClientUsers.listUserById(id);
    if (response.status === 200) {
        toast.success('Sucesso!');
        setUsers(response.data);
    } else {
        toast.error('Ops algo deu errado!');
    }
  }

  /* UMA REQUEST (ALL) E JA EXIBE TUDO ASSIM QUE CARREGA A PAGINA
  useEffect(() => {
    axios.get("https://my-json-server.typicode.com/tractian/fake-api/users")
    .then((response) => {
      console.log(response.data)
      setUsers(response.data)
    })
    .catch(() => {
      console.log("Algo deu errado")
    })
  },[])
  */

  return (
    <>
      <Sidebar 
        path1="asset" path2="companies" path3="workorders"
        name1='Ativos' name2='Unidades' name3='Atividades'
      />

      <Head>
        <title>Colaboradores</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>

        <div>
          <h1 className={styles.title}>Colaboradores</h1>
        </div>

        <div>
          <div className={styles.form}>
                      
            <form className="form-profile" onSubmit={handleFilter}>

              <label className={styles.label}>Selecione o Id do usuário
                <select className={styles.filter} name="id" id="id" value={id} onChange={(e) => setId(e.target.value)}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="all" selected>All</option>
                </select>
              </label>
              <input className={styles.submit} type="submit" value="Consultar"></input>
            </form>

          </div>
        </div>

        <div className={styles.user_grid}>
          {users.map((user, key) => {
            
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
