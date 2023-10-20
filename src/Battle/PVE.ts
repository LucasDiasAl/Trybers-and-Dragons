import Battle from './Battle';
import { SimpleFighter } from '../Fighter';
import Character from '../Character';

export default class PVE extends Battle {
  private aliveMonsters: SimpleFighter[];
  constructor(
    protected player1: Character,
    protected _monsters: SimpleFighter[],
  ) {
    super(player1);
    this.aliveMonsters = this._monsters;
  }

  private fightTurns() {
    this.aliveMonsters.forEach((e) => {
      if (this.player1.lifePoints !== -1 && e.lifePoints !== -1) {
        this.player1.attack(e);
        e.attack(this.player1);
      }
    });
    this.aliveMonsters = this.aliveMonsters.filter((e) => e.lifePoints !== -1);
  }

  public fight(): number {
    while (this.player1.lifePoints !== -1 && this.aliveMonsters.length > 0) {
      this.fightTurns();
    }
    if (this.player1.lifePoints !== -1) {
      console.log(`${this.player1.name} ganhou dos monstros.`);
    } else {
      console.log(`Monstros ganharam do ${this.player1.name}`);
    }
    return super.fight();
  }
}
