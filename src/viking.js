// Soldier
class Soldier {
    constructor(health,strength){
      this.health = health;
      this.strength = strength;
    }
    attack(){
        return this.strength;
      };
    receiveDamage(damage){
        this.health -= damage;
      };
    
}

// Viking
class Viking extends Soldier{
    constructor(name,health,strength){
        super(health,strength)
        this.name = name;
    }
    battleCry(){
            return  "Odin Owns You All!";
    };
    receiveDamage (damage){
            let pointsLife = this.health -= damage;
            if( pointsLife > damage){
                return `${this.name} has received ${damage} points of damage`;
            }else{
                return `${this.name} has died in act of combat`;
            }
        }
        
    
}

// Saxon
class Saxon extends Soldier {
    constructor(health,strength){
        super(health,strength)
    }
    receiveDamage(damage){
            let pointsLife = this.health -= damage;
            if( pointsLife > damage){
                return `A Saxon has received ${damage} points of damage`;
            }else{
                return `A Saxon has died in combat`
            }
    }
    
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }
    addViking(viking){
          this.vikingArmy.push(viking)
    };
    addSaxon(saxon){
          this.saxonArmy.push(saxon)
    };
    vikingAttack(){
            //this.saxonArmy[0].health = Math.floor(Math.random()*saxonArmy.length)
            //this.vikingArmy[0].strength = Math.floor(Math.random()*vikingArmy.length)
            if(saxon.health === vikingAmry.strength){
             splice(0,saxonArmy.length)
             return "A Saxon has died in combat"
            }
    };
    saxonAttack(){
              if(viking.health === saxon.strength){
              this.saxonArmy.splice(0,saxonArmy.length)
              return `${vikingAmry.viking.name} has received ${saxon.strength} points of damage`}
             
            
    };
    showStatus(){
       if(this.saxonArmy.length === 0){
           return "Vikings have won the war of the century!"
       }else if(this.vikingArmy.length === 0 ){
           return "Saxons have fought for their lives and survived another day..."
       }else if(this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1){
           return "Vikings and Saxons are still in the thick of battle."
       }
    }
    
}
