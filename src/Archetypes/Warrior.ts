import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  static raceInstances = 0;
  protected type_: EnergyType = 'stamina';
  constructor(_name:string) {
    super(_name);
    Warrior.raceInstances += 1;
  }

  static createdArchetypeInstances = (): number => this.raceInstances;

  get energyType(): EnergyType {
    return this.type_;
  }
}