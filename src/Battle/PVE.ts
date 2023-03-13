import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

export default class PVE extends Battle {
  private aliveMonsters: SimpleFighter[];
  constructor(player1: Fighter, protected _monsters: SimpleFighter[]) {
    super(player1);
    this.aliveMonsters = this._monsters;
  }

  private fightTurns() {
    this.aliveMonsters.forEach((e) => {
      if (this.player.lifePoints !== -1 && e.lifePoints !== -1) {
        this.player.attack(e);
        e.attack(this.player);
      }
    });
    this.aliveMonsters = this.aliveMonsters.filter((e) => e.lifePoints !== -1);
  }

  public fight(): number {
    while (this.player.lifePoints !== -1 && this.aliveMonsters.length > 0) {
      this.fightTurns();
    }
    return super.fight();
  }
}
