import Race from './Race';

export default class Dwarf extends Race {
  protected _maxLifePoints: number;
  static raceInstances = 0;
  constructor(
    _name: string, 
    _dexterity: number, 
  ) {
    super(_name, _dexterity);
    this._maxLifePoints = 80;
    Dwarf.raceInstances += 1;
  }

  get maxLifePoints() {
    return this._maxLifePoints;
  }

  static createdRacesInstances = (): number => this.raceInstances;
}
