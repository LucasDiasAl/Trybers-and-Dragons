import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static raceInstances = 0;
  protected type_: EnergyType = 'mana';
  constructor(_name:string) {
    super(_name);
    Necromancer.raceInstances += 1;
  }

  static createdArchetypeInstances = (): number => this.raceInstances;

  get energyType(): EnergyType {
    return this.type_;
  }
}