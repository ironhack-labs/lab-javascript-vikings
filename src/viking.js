// Soldier
class Soldier {
    constructor (health, strength) {
        this.health = health;
        this.strength = strength
    }
attack() {
 return this.strength
}
receiveDamage(damage) {
    this.health = this.health-damage;
}

}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength) {
    super(health,strength);
    this.name = name;
    }
attack(){
    this.strength;
    return this.strength;
}
receiveDamage(damage) {
    this.health -= damage;
    if(this.health > 0) {
        return `${this.name} has received DAMAGE points of ${damage}`; //In Jasimine it is incorrect and don't know why...
    } else {
      return `${this.name} has died in the act of combat`; // also this
}
}

battleCry(){
    return 'Odin Owns You All!'
}
    
}



// Saxon
class Saxon extends Soldier {
    attack(){
        this.strength;
        return this.strength;
    }
    receiveDamage(damage) {
        this.health = this.health-damage;
        if(this.health > 0) {
            return `A saxon has received ${damage} points of damage`;
        } else {
          return console.log`A saxon has died in combat`;
    
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
vikkingAttack(){  
    
    }
}
saxonAttack () 
showStatus()




