import React, {Component} from 'react';
import Layout from './Layout';
import Flex from './Flex';
import * as _ from 'lodash';

import TopStatCard from './TopStatCard';
import {calculateTopStats} from '../core/topStats';

export default class TopStatsCards extends Component {
  componentWillMount() {
    const topStats = calculateTopStats(this.props.stats);

    this.topStats1 = _.take(topStats, 5);
    this.topStats2 = _.takeRight(topStats, 5);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    const topStats = calculateTopStats(nextProps.stats);

    this.topStats1 = _.take(topStats, 5);
    this.topStats2 = _.takeRight(topStats, 5);

    // this.setState({stats: orderedStats})
  }

  render() {
    return (
      <div>
        <Layout type="row">
          {this
            .topStats1
            .map(m => (
              <Flex key={m.title}>
                <TopStatCard stats={m} selectedPlayer={this.props.selectedPlayer}></TopStatCard>
              </Flex>
            ))}
        </Layout>
        <Layout type="row">
          {this
            .topStats2
            .map(m => (
              <Flex key={m.title}>
                <TopStatCard stats={m} selectedPlayer={this.props.selectedPlayer}></TopStatCard>
              </Flex>
            ))}
        </Layout>
      </div>
    )
  }
}