import Link from 'next/link'
import React from 'react';
import { render } from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import styles from '@/styles/Home.module.css'

export default function Graph({title, type, label_x, label_y, data}: 
    {title: string, type: string, label_x: string, label_y: string, data: Array<number>}){

        const options = {
            chart: {
                type: type
            },
            title: {
                text: title
            },
            series: [
                {
                data: [1, 2, 1, 4, 3, 6]
                }
            ]
        };

        return (
            <div className={styles.graph}>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        )
    }