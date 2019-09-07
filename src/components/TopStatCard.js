import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import * as _ from 'lodash';

import Layout from './Layout';
import Flex from './Flex';
import TopStatCardWinner from './TopStatCardWinner';
import TopStatCardRunnerUps from './TopStatCardRunnerUps';

const cardStyle = {
  margin: 10,
  padding: 16,
}

const cardTitleStyle = {
  textAlign: 'center',
  // fontWeight: 'bold',
}

export default ({stats, selectedPlayer}) => {
  const winner = stats.tops[0];
  const runnerUps = _.tail(stats.tops);

  return (
    <Card style={cardStyle}>
      <CardHeader style={cardTitleStyle} title={stats.title}/>
      <CardContent>
        <Layout type="column">
          <Flex>
            <TopStatCardWinner 
              winner={winner} 
              selectedPlayer={selectedPlayer}/>
          </Flex>
          <br/>
          <Flex>
            <TopStatCardRunnerUps
              runnerUps={runnerUps}
              selectedPlayer={selectedPlayer}/>
          </Flex>
        </Layout>
      </CardContent>
    </Card>
  )
}