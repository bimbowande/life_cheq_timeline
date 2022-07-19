import React from 'react';
import { Layout } from '../components/Layout';
import '../styles/components/_home.scss';
import { GoalList } from '../Api/Api';
import { DoubleRing } from '../components/DoubleRing';
import {ITimeline} from '../Api/types'


export const Home: React.FC<{}> = () => {
  return (
    <Layout>
        <div className='home_container'>
          <div className='timeline_display'>
            { GoalList && <DoubleRing/> }
            {GoalList.map((goal: ITimeline, index:number) => <div></div>)}
          </div>
        </div>
    </Layout>
  )
}