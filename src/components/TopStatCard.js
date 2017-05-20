import React from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
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
      <CardTitle style={cardTitleStyle} title={stats.title}/>
      <CardText>
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
      </CardText>
    </Card>
  )
}