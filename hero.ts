export class Hero {
  name: string;
  power: number;
  life: number;
  weapon: Weapon;

  constructor(paramName: string, paramPower: number, paramLife: number) {
    this.name = paramName;
    this.power = paramPower;
    this.life = paramLife;
    console.log(this);
  }

  attack(opponent: Hero) {
    opponent.life -= this.power;
  }

  isAlive(): boolean {
    if (this.life > 0) {
      return true;
    } else {
      return false;
    }
  }
}

import { Weapon } from "./weapon";

export class HeroAxe extends Hero {
  constructor(name: string, power: number, life: number, weapon: Weapon) {
    super(name, power, life);
    this.weapon = weapon;
  }
}

export class HeroSword extends Hero {
  constructor(name: string, power: number, life: number, weapon: Weapon) {
    super(name, power, life);
  }
}

export class HeroSpear extends Hero {
  constructor(name: string, power: number, life: number, weapon: Weapon) {
    super(name, power, life);
  }
}
