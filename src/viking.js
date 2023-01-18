// Soldier
class Soldier {
    constructor(health, strength) {
    this.health = health;
    this.strength = strength;    
    }
attack(){
    return this.strength 
}

receiveDamage(damage){
    this.health = this.health - damage
}

}

// Viking
class Viking extends Soldier { 
constructor(name, health, strength) {
    super(health, strength)
    this.name = name;
}
    receiveDamage(damage) {
        this.health = this.health - damage

        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`
        } 
        else if (this.health === 0) {
            return `${this.name} has died in act of combat`
        }
    }


    battleCry() {
        return "Odin Owns You All!" }
    }



// Saxon
class Saxon extends Soldier {
    

    receiveDamage(damage){
        this.health = this.health - damage

        if (this.health > 0) {
            return `A Saxon has received ${damage} points of damage`
        } 
        else if (this.health === 0) {
            return `A Saxon has died in combat`
        }
    }
}



// War




class War {
constructor(vikingArmy = [], saxonArmy = []) {
    this.vikingArmy = vikingArmy;
    this.saxonArmy = saxonArmy;
}

addViking(Viking){
    this.vikingArmy.push(Viking)
}

addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
}
saxonAttack() {
     //storing the viking index for future usage on receiveDamage() and getting the full object from the array
    let vikingWarrior = Math.floor(Math.random() * this.vikingArmy.length);
    let chosenViking = this.vikingArmy[vikingWarrior];
    let saxonWarrior = Math.floor(Math.random() * this.saxonArmy.length);
    let chosenSaxon = this.saxonArmy[saxonWarrior];
    let vikingDamageTaken = chosenViking.receiveDamage(chosenSaxon.attack());
    if (chosenViking.health <= 0) {
      this.vikingArmy.splice(vikingWarrior, 1);
    }
    return vikingDamageTaken;
  }
  
vikingAttack(){
    let attack = this.vikingArmy[Math.floor(Math.random() * 
    this.vikingArmy.length)].receiveDamage(this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)].strength)
    this.vikingArmy.forEach((element, i)) => {
        if(element.health <= 0) {
            this.vikingArmy.splice(i, 1)
        }
    }
    return attack
};
      


showStatus(){}
}


        