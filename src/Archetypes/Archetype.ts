import { EnergyType } from '../Energy';

export default abstract class Archetype {
  private _special = 0;
  private _cost = 0;
  constructor(private _name:string) { }

  get special() { return this._special; }
  get cost() { return this._cost; }
  get name() { return this._name; }

  static createdArchetypeInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}