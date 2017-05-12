import './TopStatCardWinner.css';

import React, {Component} from 'react';

import Layout from './Layout';
import Flex from './Flex';
import playerFaces, { NO_FACE } from '../core/playerFaces'

class TopStatCardWinner extends Component {
  render() {
    let selectedPlayerClass;

    if (this.props.selectedPlayer && this.props.selectedPlayer.number === this.props.winner.number) {
      selectedPlayerClass = 'topStatCardWinner__playerSelected';
    }

    const playerPicture = playerFaces.find(f => f.number === this.props.winner.number);
    const playerPictureSrc = playerPicture
      ? playerPicture.image || NO_FACE
      : NO_FACE;

    return (
      <Layout type="row" className={selectedPlayerClass}>
        <Flex>
          <img className="topStatCardWinner__playerFace" src={playerPictureSrc} alt=""/> {/*<span>
            {this.props.winner.name}
          </span>*/}
        </Flex>

        <Flex>
          {/*<h3>{this.props.stats.title}</h3>

                  <br/> */}
          <span className="topStatCardWinner__playerName">
            {this.props.winner.name}
          </span>
          <br/>
          <span className="topStatCardWinner__playerValue">
            {this.props.winner.value}
          </span>
        </Flex>
      </Layout>
    );
  }
}

export default TopStatCardWinner;