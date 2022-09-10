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
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0){
            return (`${this.name} has received ${(damage)} points of damage`)
        } else {
            return (`${this.name} has died in act of combat`)
        }
    }

}

// Saxon
class Saxon extends Soldier{
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
         function getIndex (army){
            let index = Math.random() * army.length;
            return Math.floor(index)
         }

        let viking = this.vikingArmy[getIndex(this.vikingArmy)];
        let saxon = this.saxonArmy[getIndex(this.saxonArmy)];
        saxon.receiveDamage(viking.strength);
        if (saxon.health <= 0){
            this.saxonArmy.slice(saxon);
            receiveDamage(viking.strength);
        } 
       return Saxon.receiveDamage(viking.strength);
    };
    saxonAttack(){

    };
    showStatus(){
        if (!this.saxonArmy.length){
            return (`Vikings have won the war of the century!`)
        } else if (!this.vikingArmy.length){
            return (`Saxons have fought for their lives and survived another day...`)
        }else {
            return (`Vikings and Saxons are still in the thick of battle.`)
        }
    };

}


