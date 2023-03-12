import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  static raceInstances = 0;
  protected type_: EnergyType = 'mana';
  constructor(_name:string) {
    super(_name);
    Mage.raceInstances += 1;
  }

  static createdArchetypeInstances = (): number => this.raceInstances;

  get energyType(): EnergyType {
    return this.type_;
  }
}