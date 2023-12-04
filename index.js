const Fighter = require("./src/Fighter.js");
const Weapon = require("./src/Weapon.js");
const Shield = require("./src/Shield.js");
const Vehicle = require("./src/Vehicle.js");

let round = 0;

/** Create Heracles  */
const heracles = new Fighter("🧔 Heracles", 20, 6);

/** Create the opponent  */
const boar = new Fighter("🐗 Erymanthian Boar", 25, 12);

const sword = new Weapon("Épée", 10);
const flamethrower = new Weapon("Lance-flammes", 22);
const submachineGun = new Weapon("Mitraillette", 17);
const grenade = new Weapon("Grenade", 20);
const assaultRifle = new Weapon("Fusil d'Assaut", 19);
const gun = new Weapon("Pistolet", 12);
const rocketLauncher = new Weapon("Lance-roquette", 31);

console.log("");
console.log(
  "------------------------ÉQUIPEMENT EXISTANT------------------------"
);

console.log("");
console.log("------------------ARME(S) :");
console.log("");
console.log(sword);
console.log(flamethrower);
console.log(submachineGun);
console.log(grenade);
console.log(assaultRifle);
console.log(gun);
console.log(rocketLauncher);

const shield = new Shield("Bouclier", 10);
const ironArmor = new Shield("Armure de fer", 13);
const bulletproofVest = new Shield("Gilet par balle", 16);
const shieldHighMps = new Shield("Bouclier en polyéthylène à haut module", 17);
const exoskeletons = new Shield("Exosquelettes", 9);
const syntheticArmor = new Shield("Armure Synthétique", 30);
const PlasmaShield = new Shield("Bouclier à plasma", 25);

console.log("");
console.log("------------------DÉFENSE(S) :");
console.log("");
console.log(shield);
console.log(ironArmor);
console.log(bulletproofVest);
console.log(shieldHighMps);
console.log(exoskeletons);
console.log(syntheticArmor);
console.log(PlasmaShield);

const assaultTank = new Vehicle("Char d'Assaut", 46, 70);
const helicopter = new Vehicle("Hélicoptère", 38, 52);
const boat = new Vehicle("Bateau", 37, 30);
const ArmoredCar = new Vehicle("Voiture blindé", 27, 34);
const fighterJet = new Vehicle("Avion de chasse", 55, 61);

console.log("");
console.log("------------------VÉHICULE(S) :");
console.log("");
console.log(assaultTank);
console.log(helicopter);
console.log(boat);
console.log(ArmoredCar);
console.log(fighterJet);

heracles.equipWeapon(rocketLauncher);
heracles.equipShield(syntheticArmor);
heracles.equipVehicle();

boar.equipWeapon();
boar.equipShield();
boar.equipVehicle(assaultTank);

console.log("");
console.log(
  "-------------VÉRIFICATION DE L'ÉQUIPEMENT DES PERSONNAGES-------------"
);

console.log("");
console.log("------------------ÉQUIPEMENT DE HERACLES :");
console.log("");
console.log(
  `${
    heracles.weapon
      ? `${heracles.name} est équipé de ${heracles.weapon.name} avec un dommage de ${heracles.weapon.damage} qui vient s'ajouter à sa force.`
      : `${heracles.name} n'est pas équipé d'une arme, il inflige alors un dommage de ${heracles.strength}.`
  }`
);
console.log(
  `${
    heracles.shield
      ? `${heracles.name} est équipé de ${heracles.shield.name} avec une protection de ${heracles.shield.protection} qui vient s'ajouter à sa défense.`
      : `${heracles.name} n'est pas équipé d'un bouclier ou d'une armure, il possède alors ${heracles.dexterity} de défense.`
  }`
);
console.log(
  `${
    heracles.vehicle
      ? `${heracles.name} est équipé de ${heracles.vehicle.name} avec un dommage de ${heracles.vehicle.damage} qui vient s'ajouter à sa force et avec un blindage de ${heracles.vehicle.shielding} qui vient s'ajouter à sa défense.`
      : `${heracles.name} n'est pas équipé d'un véhicule.`
  }`
);

console.log("");
console.log("------------------ÉQUIPEMENT DE BOAR :");
console.log("");
console.log(
  `${
    boar.weapon
      ? `${boar.name} est équipé de ${boar.weapon.name} avec un dommage de ${boar.weapon.damage} qui vient s'ajouter à sa force.`
      : `${boar.name} n'est pas équipé d'une arme, il inflige alors un dommage de ${boar.strength}.`
  }`
);
console.log(
  `${
    boar.shield
      ? `${boar.name} est équipé de ${boar.shield.name} avec une protection de ${boar.shield.protection} qui vient s'ajouter à sa défense.`
      : `${boar.name} n'est pas équipé d'un bouclier ou d'une armure, il possède alors ${boar.dexterity} de défense.`
  }`
);
console.log(
  `${
    boar.vehicle
      ? `${boar.name} est équipé de ${boar.vehicle.name} avec un dommage de ${boar.vehicle.damage} qui vient s'ajouter à sa force et avec un blindage de ${boar.vehicle.shielding} qui vient s'ajouter à sa défense.`
      : `${boar.name} n'est pas équipé d'un véhicule.`
  }`
);

console.log("");
console.log(
  "-----------------INFORMATION SUR LES PERSONNAGES-----------------"
);

console.log("");
console.log("------------------INFORMATIONS HERACLES :");
console.log("");
console.log(heracles);

console.log("");
console.log("----------------------INFORMATIONS BOAR :");
console.log("");
console.log(boar);

console.log("");
console.log(
  "---------ROUND FIGHT + INFORMATION SUR LE DÉROULEMENT DU COMBAT---------"
);

/**
 * Helper to produce the result of a round
 */

const roundDisplay = (fighter1, fighter2) => {
  while (fighter1.isAlive() && fighter2.isAlive()) {
    const attacker = round % 2 === 1 ? fighter1 : fighter2;
    const defender = round % 2 === 0 ? fighter1 : fighter2;
    attacker.fight(defender, attacker);
    round++;

    console.log("");
    if (round >= 2) {
      console.log(
        "----------------------------------------------TOUR SUIVANT :"
      );
      console.log("");
    }
    console.log(`🕛 Tour ${round}: ${attacker.name} attaque 🗡️`);
    console.log(
      `${attacker.name} inflige ${attacker.damages} de dommage et il reste à ${defender.name} : ${defender.life}PV`
    );
  }
};

console.log(roundDisplay(heracles, boar));

console.log("");
console.log(
  "-----------------FIGHT TERMINÉ (VAINQUEUR ET VAINCU)-----------------"
);

/**
 * Helper to dispatch fighters between winner and loser
 */
const score = (fighter1, fighter2) => {
  return fighter1.isAlive()
    ? {
        VAINQUEUR: fighter1.name,
        VAINCU: fighter2.name,
      }
    : {
        VAINQUEUR: fighter2.name,
        VAINCU: fighter1.name,
      };
};

console.log("");
console.log(score(heracles, boar));
console.log("");
