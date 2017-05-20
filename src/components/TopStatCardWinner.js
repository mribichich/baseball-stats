import './TopStatCardWinner.css';

import React from 'react';

import Layout from './Layout';
import Flex from './Flex';
import playerFaces, { NO_FACE } from '../core/playerFaces'

const TopStatCardWinner = ({selectedPlayer, winner}) => {
  let selectedPlayerClass;

  if (selectedPlayer && selectedPlayer.number === winner.number) {
    selectedPlayerClass = 'topStatCardWinner__playerSelected';
  }

  const playerPicture = playerFaces.find(f => f.number === winner.number);
  const playerPictureSrc = playerPicture
    ? playerPicture.image || NO_FACE
    : NO_FACE;

  return (
    <Layout type="row" className={selectedPlayerClass}>
      <Flex>
        <img className="topStatCardWinner__playerFace" src={playerPictureSrc} alt="" />
      </Flex>

      <Flex style={{textAlign: 'center'}}>
        <span className="topStatCardWinner__playerName">
          {winner.name}
        </span>
        <br/>
        <span className="topStatCardWinner__playerValue">
          {winner.value}
        </span>
      </Flex>
    </Layout>
  );
}

export default TopStatCardWinner;