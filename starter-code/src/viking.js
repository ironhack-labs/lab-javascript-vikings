// Soldier
class Soldier {
    constructor(health, strength,){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health =(this.health - damage);
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name = name;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health=(this.health - damage);
        if (this.health > 0) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength);
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health = (this.health - damage);
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        } else {
            return "A Saxon has died in combat";
        }
    }

}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy= [];
    }
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
    vikingAttack(){
        let i = genRandom(this.saxonArmy.length);
        let n = genRandom(this.vikingArmy.length);
        let results = this.saxonArmy[i].receiveDamage(this.vikingArmy[n].strength);
        if (this.saxonArmy[i].health <= 0) {
            this.saxonArmy.splice(i , 1);
            return results;
          } else {
            return results;
          }

    }
    
    saxonAttack(){
            let i = genRandom(this.vikingArmy.length);
            let n = genRandom(this.saxonArmy.length);
      
            let results = this.vikingArmy[i].receiveDamage(this.saxonArmy[n].strength);
      
             if (this.vikingArmy[i].health <= 0) {
                   this.vikingArmy.splice(i , 1);
                   return results;
      
            } else {
              return results;
            }
 
    }
    showStatus(){
        if (this.vikingArmy.length <= 0) {
            return (`Saxons have fought for their lives and survive another day...`);
    
          } else if (this.saxonArmy.length <= 0) {
            return (`Vikings have won the war of the century!`);
    
          } else {
            return (`Vikings and Saxons are still in the thick of battle.`);
    
          }
    
    }
}
function genRandom(x) {
    return Math.floor(Math.random() * Math.floor(x));
  }
  