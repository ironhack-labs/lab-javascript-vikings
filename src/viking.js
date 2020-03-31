// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(dmg){
        this.health -= dmg;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name = name;
    }

    receiveDamage(dmg){
        this.health -= dmg;
        if (this.health <= 0) {return `${this.name} has died in act of combat`} 
        else {return `${this.name} has received ${dmg} points of damage`};
    }

    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super(health, strength);
    }

    receiveDamage(dmg){
        this.health -= dmg;
        if (this.health <= 0) {
            return `A Saxon has died in combat`;
        } else {
            return `A Saxon has received ${dmg} points of damage`;}
    }
}

// War
class War {

    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(obj){
        this.vikingArmy.push(obj);
    }

    addSaxon(obj){
        this.saxonArmy.push(obj);
    }

    vikingAttack(){
        //choose victim at random and make it receive dmg
        this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)]
            .receiveDamage(this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)].strength);
        //filter out dead saxons
        this.saxonArmy = this.saxonArmy.filter(saxon => saxon.health > 0);

    }
    saxonAttack(){
        //choose victim at random and make it receive dmg
        this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)]
            .receiveDamage(this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength);
        //filter out dead saxons
        this.vikingArmy = this.vikingArmy.filter(viking => viking.health > 0);
        
    }
    
    showStatus() {
        if (this.vikingArmy.length === 0) {
          return 'Saxons have fought for their lives and survived another day...'
        } else if (this.saxonArmy.length === 0) {
          return 'Vikings have won the war of the century!'
        } else {
          return 'Vikings and Saxons are still in the thick of battle.'
        }
      }
}
