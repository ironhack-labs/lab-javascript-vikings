//Soldier
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
    }
  }
  
  //Viking
  class Viking extends Soldier {
    constructor(name, health, strength) {
      super(health, strength);
      this.name = name;
    }
  
    receiveDamage(damage) {
      this.health -= damage;
      if (this.health > 0) {
        return `${this.name} ha recibido ${damage} puntos de daño`;
      } else {
        return `${this.name} ha muerto en acto de combate`;
      }
    }
  
    battleCry() {
      return "¡Odin es dueño de todos ustedes!";
    }
  }
  
  //Saxon
  class Saxon extends Soldier {
    receiveDamage(damage) {
      this.health -= damage;
      if (this.health > 0) {
        return `Un sajón ha recibido ${damage} puntos de daño`;
      } else {
        return `Un sajón ha muerto en combate`;
      }
    }
  }
  
  //War
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
      if (this.saxonArmy.length === 0 || this.vikingArmy.length === 0) return '';
  
      const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
      const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  
      const viking = this.vikingArmy[vikingIndex];
      const saxon = this.saxonArmy[saxonIndex];
  
      const damage = viking.attack();
      const result = saxon.receiveDamage(damage);
  
      if (saxon.health <= 0) {
        this.saxonArmy.splice(saxonIndex, 1);
      }
      return result;
    }
  
    saxonAttack() {
      if (this.saxonArmy.length === 0 || this.vikingArmy.length === 0) return '';
  
      const vikingIndex = Math.floor(Math.random() * this.vikingArmy.length);
      const saxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
  
      const viking = this.vikingArmy[vikingIndex];
      const saxon = this.saxonArmy[saxonIndex];
  
      const damage = saxon.attack();
      const result = viking.receiveDamage(damage);
  
      if (viking.health <= 0) {
        this.vikingArmy.splice(vikingIndex, 1);
      }
      return result;
    }
  
    showStatus() {
      if (this.saxonArmy.length === 0) {
        return "¡Los vikingos han ganado la guerra del siglo!";
      } else if (this.vikingArmy.length === 0) {
        return "Los sajones han luchado por sus vidas y sobrevivieron otro día...";
      } else {
        return "Los vikingos y los sajones todavía están en el fragor de la batalla";
      }
    }
  
    // Iteración 5
    attack(attackingArmy, defendingArmy) {
      if (defendingArmy.length === 0 || attackingArmy.length === 0) return '';
  
      const attackerIndex = Math.floor(Math.random() * attackingArmy.length);
      const defenderIndex = Math.floor(Math.random() * defendingArmy.length);
  
      const attacker = attackingArmy[attackerIndex];
      const defender = defendingArmy[defenderIndex];
      const damage = attacker.attack();
      const result = defender.receiveDamage(damage);
  
      if (defender.health <= 0) {
        defendingArmy.splice(defenderIndex, 1);
      }
      return result;
    }
  
    vikingAttackRefactor() {
      return this.attack(this.vikingArmy, this.saxonArmy);
    }
  
    saxonAttackRefactor() {
      return this.attack(this.saxonArmy, this.vikingArmy);
    }
  }
  

  const guerra = new War();
  
  const viking1 = new Viking("Ragnar", 100, 20);
  const viking2 = new Viking("Bjorn", 120, 15);
  const saxon1 = new Saxon(80, 10);
  const saxon2 = new Saxon(90, 12);
  
  guerra.addViking(viking1);
  guerra.addViking(viking2);
  guerra.addSaxon(saxon1);
  guerra.addSaxon(saxon2);
  
  console.log(guerra.showStatus());
  console.log(guerra.vikingAttack());
  console.log(guerra.showStatus());
  console.log(guerra.saxonAttack());
  console.log(guerra.showStatus());
  

  const guerraRefactor = new War();
  guerraRefactor.addViking(viking1);
  guerraRefactor.addViking(viking2);
  guerraRefactor.addSaxon(saxon1);
  guerraRefactor.addSaxon(saxon2);
  
  console.log("Refactorizado:");
  console.log(guerraRefactor.showStatus());
  console.log(guerraRefactor.vikingAttackRefactor());
  console.log(guerraRefactor.showStatus());
  console.log(guerraRefactor.saxonAttackRefactor());
  console.log(guerraRefactor.showStatus());
  