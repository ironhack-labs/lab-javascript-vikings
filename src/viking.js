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
        this.health -= damage;
        // Não deve haver return nem texto aqui
    }
}




// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength);
        this.name = name;
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;    
        }
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength);
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength;   
    }

    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }
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

  vikingAttack() {
    // Selecionar aleatórios
    let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let randomSaxon = this.saxonArmy[randomSaxonIndex];

    // O retorno deve vir da chamada do receiveDamage
    let result = randomSaxon.receiveDamage(randomViking.strength);

    // Remover se a vida for 0 ou menos
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }

    return result;
  }

  saxonAttack() {
    // Selecionar aleatórios
    let randomVikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
    let randomViking = this.vikingArmy[randomVikingIndex];
    let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    // O retorno deve vir da chamada do receiveDamage
    let result = randomViking.receiveDamage(randomSaxon.strength);

    // Remover se a vida for 0 ou menos
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }

    return result;
  }

  showStatus() {
    // 1. Se o array de Saxons estiver vazio
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } 
    // 2. Se o array de Vikings estiver vazio
    else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } 
    // 3. Se ainda houver ambos
    else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}


      

