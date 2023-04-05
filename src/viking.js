// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.damage = damage;
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
        super(health, strength);
        this.name = name
    }
    attack(){
        super.attack();
        return this.strength
    }
    receiveDamage(vikingDamage){
        this.damage = vikingDamage;
        this.health -= this.damage;
        if(this.health > 0){
            return `${this.name} has received ${this.damage} points of damage`
        } else{ 
            return `${this.name} has died in act of combat`
        };
    }
    battleCry(){
        return `Odin Owns You All!`
    }
}

// Saxon
class Saxon extends Soldier{
    attack(){
        super.attack();
        return this.strength
    }
    receiveDamage(saxonDamage){
        this.damage = saxonDamage
        this.health -= this.damage
        if(this.health > 0){
            return `A Saxon has received ${this.damage} points of damage`
        } else{
            return `A Saxon has died in combat`
        }
        }   
}

// War
class War {
    
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = []
    }

     addViking(vikingName){
        this.vikingArmy.push(vikingName)
      }
    addSaxon(saxonName){
        this.saxonArmy.push(saxonName)
    }
    vikingAttack(){
        
    }
    // saxonAttack()
    // showStatus()
}
