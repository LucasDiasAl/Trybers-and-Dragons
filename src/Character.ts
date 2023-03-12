import Fighter from './Fighter';
import Energy from './Energy';
import Archetype, { Mage } from './Archetypes';
import getRandomInt from './utils';
import Race, { Elf } from './Races';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype :Archetype;
  private _maxLifePoints :number;
  private _lifePoints :number;
  private _strength :number;
  private _defense :number;
  private _dexterity :number;
  private _energy :Energy;
  constructor(
    public name :string, 
    archerType: Archetype = new Mage(name),
    race: Race = new Elf(name, getRandomInt(1, 10)),
  ) {
    this._race = race;
    this._archetype = archerType;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._maxLifePoints = (this._race.maxLifePoints / 2);
    this._lifePoints = this._maxLifePoints;
    this._dexterity = this._race.dexterity;
    this._energy = { 
      type_: this._archetype.energyType, 
      amount: getRandomInt(1, 10), 
    };
  }

  get race(): Race { return this._race; }
  get archetype(): Archetype { return this._archetype; }
  get lifePoints(): number { return this._lifePoints; }
  get strength():number { return this._strength; }
  get defense(): number { return this._defense; }
  get dexterity(): number { return this._dexterity; }
  get energy(): Energy { return { ...this._energy }; }

  public receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) this._lifePoints -= damage;
    else { this._lifePoints -= 1; }
    this._lifePoints = this._lifePoints <= 0 ? -1 : this._lifePoints;
    return this._lifePoints;
  }

  public attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  public levelUp(): void {
    this._strength += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    const increasedLifePoint = getRandomInt(1, 10) + this._maxLifePoints;
    this._maxLifePoints = increasedLifePoint >= this._race.maxLifePoints
      ? this._race.maxLifePoints
      : increasedLifePoint;
    this._lifePoints = this._maxLifePoints;
    this._energy.amount = 10;
  }
}
