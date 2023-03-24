import Head from 'next/head'
import Image from 'rc-image';
import { toast } from 'react-toastify';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import axios from 'axios';
import { FormEvent, useState, useEffect } from 'react'
import styles from '@/styles/Home.module.css'

import Sidebar from '@/components/Sidebar';

export default function Assets() {

  const [assets, setAssets] = useState<any[]>([])

  const [id, setId] = useState<any>();


  useEffect(() => {
    axios.get("https://my-json-server.typicode.com/tractian/fake-api/assets")
    .then((response) => {
      console.log(response.data)
      setAssets(response.data)
    })
    .catch(() => {
      console.log("Algo deu errado")
    })
  },[])


  const options = {
    chart: {
      type: 'spline',
      borderRadius: 10,
      height: (9 / 16 * 100) + '%',
    },
    title: {
      text: 'My chart'
    },
    series: [
      {
        data: [1, 2, 1, 4, 8, 3, 5]
      }
    ]
  };

  return (
    <>
      <Sidebar 
        path1="users" path2="companies" path3="workorders"
        name1='Colaboradores' name2='Unidades' name3='Atividades'
      />
      <Head>
        <title>Gráficos</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>

        <div className={styles.graph_page}>
          <HighchartsReact highcharts={Highcharts} options={options} />
          <HighchartsReact highcharts={Highcharts} options={options} />
          <HighchartsReact highcharts={Highcharts} options={options} />
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>

        <br></br>

        <div className={styles.submit}>
            <a type="submit" href='asset'>Ativos</a>
        </div>

      </main>
    </>
  )
}
