import Character from './Character';
import Monster from './Monster';
import Battle, { PVP, PVE } from './Battle';
import Dragon from './Dragon';

const player1 = new Character('Player 1');
const player2 = new Character('Player 2');
const player3 = new Character('Player 3');

for (let i = 0; i <= 10; i += 1) {
  player1.levelUp();
}

for (let i = 0; i <= 10; i += 1) {
  player2.levelUp();
}

for (let i = 0; i <= 10; i += 1) {
  player3.levelUp();
}

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);
const pvp2 = new PVP(player2, player1);
const pvp3 = new PVP(player1, player3);
const pve = new PVE(player1, [monster1, monster2]);
const pve2 = new PVE(player2, [monster1, monster2]);
const pve3 = new PVE(player3, [monster1, monster2]);

const runBattles = (battles: Battle[]) => {
  battles.forEach((e) => e.fight());
};

runBattles([pvp, pvp2, pvp3, pve, pve2, pve3]);

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };
