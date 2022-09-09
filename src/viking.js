// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
          return this.strength;

      }        
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return (`${this.name} has received ${(damage)} points of damage`)
        } else {
            return (`${this.name} has died in act of combat`)
        }
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength){
      super(health,strength);
      this.name = name;
    }
    battleCry(){
        return (`Odin Owns You All!`)
    }

}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength);
    }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return (`A Saxon has received ${(damage)} points of damage`)
        } else {
            return (`A Saxon has died in combat`)
        }
        
    }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(Viking){
        this.vikingArmy.push(Viking);
    };
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    };
    vikingAttack(){
        let randomViking = this.vikingArmy[Math.floor(Math.random())];
        let randomSaxon = this.saxonArmy[Math.floor(Math.random())];
        if (randomViking.strength > randomSaxon.health){
             this.saxonArmy.splice(randomSaxon, 1)          
        }
       return Saxon.receiveDamage(randomViking.strength);
    }
}

const ale = new Soldier (4,6);
