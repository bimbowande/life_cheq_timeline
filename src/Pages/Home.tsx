import React from 'react';
import { Layout } from '../components/Layout';
import '../styles/components/_home.scss';
import { GoalList } from '../Api/Api';

export const Home: React.FC<{}> = () => {
  return (
    <Layout>
        <div className='home_container'>
           { GoalList && <p>test data</p>}
        </div>
    </Layout>
  )
}
