// Soldier
class Soldier {
    constructor(health, strength) {
    this.health = health;
    this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
       this.health = this.health - damage
    }
  
}


// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
      super(health,strength)
      this.name = name;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health = this.health - damage;

        if (this.health > 0 ) {
            return `${this.name} has received ${damage} points of damage`;
        } else {
            return `${this.name} has died in act of combat`;
        }
    }
    battleCry() {
        return `Odin Owns You All!`;
    }
}

// Saxon

class Saxon extends Soldier{
    constructor(health, strength){
        super(health, strength)
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health= this.health - damage
        if (this.health>0){
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
 }


// War0
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
        
    addViking(Viking){
        this.vikingArmy.push(Viking);
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
    vikingAttack(){
        let index1 = Math.floor(Math.random() * this.vikingArmy.length);
        let index2 = Math.floor(Math.random() * this.saxonArmy.length);
        const result = this.saxonArmy[index2].receiveDamage(this.vikingArmy[index1].strength);

        for (let i=0; i<this.saxonArmy.length; i++){
            if(this.saxonArmy[i].health <= 0){
                this.saxonArmy.splice(i,1);
            }
        }

        return result;
    }
    saxonAttack(){
        let index1 = Math.floor(Math.random() * this.vikingArmy.length);
        let index2 = Math.floor(Math.random() * this.saxonArmy.length);
        const result2 = this.vikingArmy[index1].receiveDamage(this.saxonArmy[index2].strength);

        for (let i=0; i<this.vikingArmy.length; i++){
            if(this.vikingArmy[i].health <= 0){
                this.vikingArmy.splice(i,1);
            }
        }

        return result2; 
    }
    showStatus(){
        if (this.saxonArmy.length === 0){
            return`Vikings have won the war of the century!`
        }else if (this.vikingArmy.length === 0){
            return`Saxons have fought for their lives and survived another day...`
        }else {
            return`Vikings and Saxons are still in the thick of battle.`
        }
    }

}
