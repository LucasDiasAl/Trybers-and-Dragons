import Character from './Character';
import Monster from './Monster';
import Battle, { PVP, PVE } from './Battle';
import Dragon from './Dragon';

const player1 = new Character('Player 1');
const player2 = new Character('Player 2');
const player3 = new Character('Player 3');

for (let i = 0; i <= 100; i += 1) {
  player1.levelUp();
}

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);
const pve = new PVE(player1, [monster1, monster2]);

const runBattles = (battles: Battle[]) => {
  battles.forEach((e) => e.fight());
};

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};