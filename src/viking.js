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
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health, strength)
        this.name = name;
    }

    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`;
        }else
            return `${this.name} has died in act of combat`;    
    }

    battleCry(){
        return "Odin Owns You All!"
    }

    
    
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage){
        this.health -= damage;
        if(this.health > 0){
            return `A Saxon has received ${damage} points of damage`;
        }else{
            return `A Saxon has died in combat`; 
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
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon);
    }
    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }
    
    vikingAttack(){
        let i = this.getRndInteger(0,this.saxonArmy.length);
        let j = this.getRndInteger(0,this.vikingArmy.length);
        let saxonSoldierDamageRcv = this.saxonArmy[i].receiveDamage(this.vikingArmy[j].strength);
        if(this.saxonArmy[i].health <= 0){
            this.saxonArmy.splice(i,1);
        }
        return saxonSoldierDamageRcv;

        
    }

    saxonAttack(){
        let i = this.getRndInteger(0,this.vikingArmy.length);
        let j = this.getRndInteger(0,this.saxonArmy.length);
        let vikingSoldierDamageRcv = this.vikingArmy[i].receiveDamage(this.saxonArmy[j].strength);
        if(this.vikingArmy[i].health <= 0){
            this.vikingArmy.splice(i,1);
        }
        return vikingSoldierDamageRcv;
    }

    showStatus(){
        if(typeof this.saxonArmy !== 'undefined' && this.saxonArmy.length > 0){
            return "Vikings have won the war of the century!";
        }
        else if(typeof this.vikingArmy !== 'undefined' && this.vikingArmy.length > 0){
            return "Saxons have fought for their lives and survived another day...";
        }
        else{
            return "Vikings and Saxons are still in the thick of battle.";
        }

    }


}
