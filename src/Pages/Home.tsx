import React from 'react';
import { Layout } from '../components/Layout';
import '../styles/components/_home.scss';
import { GoalList } from '../Api/Api';
import { DoubleRing } from '../components/DoubleRing';

import {ITimeline} from '../Api/types'
import { GroupTimeline } from '../components/GroupTimeline';


export const Home: React.FC<{}> = () => {
  return (
    <Layout>
        <div className='home_container'>
          <div className='timeline_display'>
            { GoalList && <DoubleRing text={` You are here `}/> }
            { GoalList.map((goal: ITimeline, index:number) => <GroupTimeline date={goal.date} goals={goal.goals}/>) }
          </div>
        </div>
    </Layout>
  )
}