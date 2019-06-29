// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    this.health = this.health - damage;
    return this.health > 0
      ? this.name + " has received " + damage + " points of damage"
      : this.name + " has died in act of combat";
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health = this.health - damage;

    return this.health > 0
      ? "A Saxon has received " + damage + " points of damage"
      : "A Saxon has died in combat";
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  pickRandomSoldier(army) {
    const soldierIndex = Math.floor(Math.random() * army.length);
    const selectedSoldier = army[soldierIndex];

    return [selectedSoldier, soldierIndex];
  }

  vikingAttack() {
    const [vikingSoldier] = this.pickRandomSoldier(this.vikingArmy);
    const [saxonSoldier, saxonIndex] = this.pickRandomSoldier(this.saxonArmy);
    const damageTaken = vikingSoldier.strength;

    if (saxonSoldier.health <= vikingSoldier.strength) {
      this.saxonArmy.splice(saxonIndex, 1);
    }

    return saxonSoldier.receiveDamage(damageTaken);
  }

  saxonAttack() {
    const [vikingSoldier, vikingIndex] = this.pickRandomSoldier(
      this.vikingArmy
    );
    const [saxonSoldier] = this.pickRandomSoldier(this.saxonArmy);
    const damageTaken = saxonSoldier.strength;

    if (vikingSoldier.health <= saxonSoldier.strength) {
      this.vikingArmy.splice(vikingIndex, 1);
    }

    return vikingSoldier.receiveDamage(damageTaken);
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    }
    if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    }

    return "Vikings and Saxons are still in the thick of battle.";
  }
}
