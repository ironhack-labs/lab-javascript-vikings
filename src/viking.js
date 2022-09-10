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
        let viking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
        let saxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
        let saxonIndex = this.saxonArmy.indexOf(saxon)
        if (saxon.health < viking.strength){
            this.saxonArmy.slice(saxonIndex, 1);
            return 
            Saxon.receiveDamage(viking.strength);
        }
       return Saxon.receiveDamage(viking.strength);
    };
    saxonAttack(){

    };
    showStatus(){
        if (this.saxonArmy.length === 0 ){
            return (`Vikings have won the war of the century!`)
        } else if (this.vikingArmy.length === 0 ){
            return (`Saxons have fought for their lives and survived another day...`)
        }else {
            return (`Vikings and Saxons are still in the thick of battle.`)
        }
    };

}


