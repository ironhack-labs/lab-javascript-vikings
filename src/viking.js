// Soldier
class Soldier {
    constructor(health, strength) {
this.health = health;
this.strength = strength;
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage){
        this.health -= damage;
    }
    
  }

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name;
        this.health = health;
        this.strength = strength;
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        } else {
        return `${this.name} has died in act of combat`; }
    }
    battleCry(){
        return `Odin Owns You All!`;
    } 
}

// Saxon
class Saxon extends Soldier {


receiveDamage(damage) {
    this.health -= damage;
    if (this.health > 0) {
        return `A Saxon has received ${damage} points of damage`;
    } else {
    return `A Saxon has died in combat`}
}
}



// War
class War {
    constructor() {
        this.vikingArmy= [],
        this.saxonArmy=[];
    }

    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon (saxon) {
        this.saxonArmy.push(saxon);
    }

    Attack(attackers,victims) {
        const randomVictim = Math.floor(Math.random() * victims.length);
        const randomAttacker = Math.floor(Math.random() * attackers.length);
    
        const result = victims[randomVictim].receiveDamage(
          attackers[randomAttacker].attack()
        );
        if(victims[randomVictim].health <= 0) victims.splice(randomVictim,1);
    
        return result;
      }
    
      vikingAttack() {
        return this.Attack(this.vikingArmy,this.saxonArmy);
      }
    
      saxonAttack() {
        return this.Attack(this.saxonArmy, this.vikingArmy);
      }




    showStatus(){
        if (this.saxonArmy.length === 0){
            return `Vikings have won the war of the century!`
            } else if (this.vikingArmy.length === 0){
                return `Saxons have fought for their lives and survived another day...`
            } else {
                return `Vikings and Saxons are still in the thick of battle.`
            }
        }
    }