import './TopStatCardRunnerUps.css';

import React from 'react';

import Layout from './Layout';
import Flex from './Flex';

const TopStatCardRunnerUps = ({runnerUps, selectedPlayer}) => {
  return (
    <div>
      {runnerUps
        .map(m => {
          let selectedPlayerClass;

          if (selectedPlayer && selectedPlayer.number === m.number) {
            selectedPlayerClass = 'topStatCardRunnerUps__playerSelected';
          }

          return (
            <Layout key={m.name} 
              className={selectedPlayerClass}>
              <Flex style={{flexGrow: 3}}>
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

export default TopStatCardRunnerUps;