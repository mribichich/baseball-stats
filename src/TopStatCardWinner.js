import './TopStatCardWinner.css';

import React, {Component} from 'react';
import Layout from './Layout';
import Flex from './Flex';

class TopStatCardWinner extends Component {
  render() {
    let selectedPlayerClass;

    if (this.props.selectedPlayer && this.props.selectedPlayer.number === this.props.winner.number) {
      selectedPlayerClass = 'topStatCardWinner__playerSelected';
    }

    return (
      <Layout type="row" className={selectedPlayerClass}>
        <Flex>
          <span>
            {this.props.winner.name}
          </span>
        </Flex>

        <Flex>
          {/*<h3>{this.props.stats.title}</h3>

                  <br/> */}

          {this.props.winner.value}
        </Flex>
      </Layout>
    );
  }
}

export default TopStatCardWinner;