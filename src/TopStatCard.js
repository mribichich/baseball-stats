import './TopStatCard.css';

import React, {Component} from 'react';
import {
  Card,
  // CardActions, CardHeader, CardMedia,
  CardTitle,
  CardText
} from 'material-ui/Card';
import * as _ from 'lodash';
import Layout from './Layout';
import Flex from './Flex';

import TopStatCardWinner from './TopStatCardWinner';
import TopStatCardRunnerUps from './TopStatCardRunnerUps';

export default class TopStatCard extends Component {
  render() {
    const winner = this.props.stats.tops[0];
    const runnerUps = _.tail(this.props.stats.tops);

    return (
      <Card className="topStatCard">
        <CardTitle title={this.props.stats.title}/>
        <CardText>
          <Layout type="column">
            <Flex>
              <TopStatCardWinner winner={winner} selectedPlayer={this.props.selectedPlayer}/>
            </Flex>
            <br/>
            <Flex>
              <TopStatCardRunnerUps
                runnerUps={runnerUps}
                selectedPlayer={this.props.selectedPlayer}/>
            </Flex>
          </Layout>
        </CardText>
      </Card>
    )
  }
}