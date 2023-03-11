import Race from './Race';

export default class Orc extends Race {
  protected _maxLifePoints: number;
  static raceInstances = 0;
  constructor(
    _name: string, 
    _dexterity: number, 
  ) {
    super(_name, _dexterity);
    Orc.raceInstances += 1;
    this._maxLifePoints = 74;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances = (): number => this.raceInstances;
}