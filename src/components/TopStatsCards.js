import React from 'react';
import Layout from './Layout';
import Flex from './Flex';
import * as _ from 'lodash';

import TopStatCard from './TopStatCard';
import {calculateTopStats} from '../core/topStats';

export default ({stats, selectedPlayer}) => {
  const topStats = calculateTopStats(stats);

  const topStats1 = _.take(topStats, 6);
  const topStats2 = _.takeRight(topStats, 6);

  return (
    <div style={{margin: 20}}>
      <Layout type="row">
        {topStats1.map(m => (
            <Flex key={m.title}>
              <TopStatCard stats={m} selectedPlayer={selectedPlayer}></TopStatCard>
            </Flex>
          ))}
      </Layout>
      <Layout type="row">
        {topStats2.map(m => (
            <Flex key={m.title}>
              <TopStatCard stats={m} selectedPlayer={selectedPlayer}></TopStatCard>
            </Flex>
          ))}
      </Layout>
    </div>
  )
}