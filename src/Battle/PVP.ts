import Battle from './Battle';
import Character from '../Character';

export default class PVP extends Battle {
  constructor(protected player1: Character, protected _player2: Character) {
    super(player1);
  }

  public fight(): number {
    while (this.player.lifePoints !== -1 && this._player2.lifePoints !== -1) {
      this.player.attack(this._player2);
      this._player2.attack(this.player);
    }
    if (this.player.lifePoints !== -1) {
      console.log(`${this.player1.name} ganhou do ${this._player2.name}.`);
    } else {
      console.log(`${this._player2.name} ganhou do ${this.player1.name}`);
    }

    return super.fight();
  }
}
