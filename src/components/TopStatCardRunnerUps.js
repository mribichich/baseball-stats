import './TopStatCardRunnerUps.css';

import React, {Component} from 'react';

import Layout from './Layout';
import Flex from './Flex';

class TopStatCardRunnerUps extends Component {
  render() {
    return (
      <div>
        {this
          .props
          .runnerUps
          .map(m => {
            let selectedPlayerClass;

            if (this.props.selectedPlayer && this.props.selectedPlayer.number === m.number) {
              selectedPlayerClass = 'topStatCardRunnerUps__playerSelected';
            }

            return (
              <Layout key={m.name} 
                className={selectedPlayerClass}>
                <Flex style={{flexGrow: 2}}>
                  <span>{m.name}</span>
                </Flex>
                <Flex style={{textAlign: 'center'}}>
                  {m.value}
                </Flex>
              </Layout>
            )
          })}
      </div>
    );
  }
}

export default TopStatCardRunnerUps;