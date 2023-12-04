const MAX_LIFE = 100;
const weapon = null;
const shield = null;
const vehicle = null;

class Fighter {
  constructor(name, strength, dexterity) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
    this.weapon = weapon;
    this.shield = shield;
    this.vehicle = vehicle;
  }

  equipWeapon(weapon) {
    this.weapon = weapon;
  }

  equipShield(shield) {
    this.shield = shield;
  }

  equipVehicle(vehicle) {
    this.vehicle = vehicle;
  }

  // Launch a fight
  fight(defender, attacker) {
    const attackPoints = this.getRandomInt(this.getDamage());

    attacker.damages = Math.max(attackPoints - this.getDefense(), 3);

    defender.life = Math.max(defender.life - attacker.damages, 0);
  }

  // Generate a random value between 1 and max
  getRandomInt(max) {
    return 1 + Math.floor(Math.random() * max);
  }

  getDamage() {
    if (this.weapon && this.vehicle) {
      return this.strength + this.weapon.damage + this.vehicle.damage;
    } else if (this.weapon) {
      return this.strength + this.weapon.damage;
    } else if (this.vehicle) {
      return this.strength + this.vehicle.damage;
    }
    return this.strength;
  }

  getDefense() {
    if (this.shield && this.vehicle) {
      return this.dexterity + this.shield.protection + this.vehicle.shielding;
    } else if (this.shiel) {
      return this.dexterity + this.shield.protection;
    } else if (this.vehicle) {
      return this.dexterity + this.vehicle.shielding;
    }
    return this.dexterity;
  }

  // Determine if a fighter is still alive
  isAlive() {
    return this.life > 0;
  }
}

module.exports = Fighter;
