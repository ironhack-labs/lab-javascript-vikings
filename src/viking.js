// Soldier
class Soldier {
    constructor (health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack (){
        return this.strength;
    }
    receiveDamage (damage){
       this.health = this.health - damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name;
    }
    receiveDamage (damage){
        super.receiveDamage(damage);
        if (this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        }else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return `Odin Owns You All!`;
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage (damage){
        super.receiveDamage(damage);
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        }else {
            return `A Saxon has died in combat`
        }
    }
}



// War
class War {
    constructor (){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking (vikingObject){
        this.vikingArmy.push(vikingObject) 
    }
    addSaxon (saxonObject){
        this.saxonArmy.push(saxonObject)
    }
    vikingAttack (){
        let randomSax = Math.floor(Math.random() * this.saxonArmy.length);
        let randomVik = Math.floor(Math.random() * this.vikingArmy.length);
        let attack = this.saxonArmy[randomSax].receiveDamage(this.vikingArmy[randomVik].strength);
        if (this.saxonArmy[randomSax].health <= 0){
            this.saxonArmy.splice(randomSax, 1)
        }
        return attack;
    }
    saxonAttack (){
        let randomSax = Math.floor(Math.random() * this.saxonArmy.length);
        let randomVik = Math.floor(Math.random() * this.vikingArmy.length);
        let attack = this.vikingArmy[randomVik].receiveDamage(this.saxonArmy[randomSax].strength);
        if (this.vikingArmy[randomVik].health <= 0){
            this.vikingArmy.splice(randomVik, 1)     
        }
        return attack;
    }
    showStatus(){
        if (this.saxonArmy.length <= 0) {
            return "Vikings have won the war of the century!"
          } else if (this.vikingArmy.length <= 0) {
            return "Saxons have fought for their lives and survived another day..."
          } else {
            return "Vikings and Saxons are still in the thick of battle."
          }
    }
}
