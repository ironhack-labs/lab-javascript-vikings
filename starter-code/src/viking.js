// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
        this.attack = function () {
            return strength;
          }
        this.receiveDamage = function (damage) {
        this.health = this.health - damage
        }
    }
  }

// Viking
class Viking extends Soldier  {
    constructor (name, health, strength) {
        super(health, strength);
        this.name = name;
        this.receiveDamage = function (damage){
            this.health = this.health - damage
            if(this.health > 0){
                return this.name + " has received " + damage + " points of damage"
            }
            else {
                return this.name + " has died in act of combat"
            }
        }
        this.battleCry = function () {
            return "Odin Owns You All!";
          }
      }
}

// Saxon
class Saxon extends Soldier{
    constructor (health, strength) {
        super(health, strength);
        this.receiveDamage = function(damage){
            this.health = this.health - damage
            if(this.health > 0){
                return "A Saxon has received " + damage + " points of damage"
            }
            else {
                return "A Saxon has died in combat"
            }
        }
    }


}

// War
class War {
    constructor () {
        this.vikingArmy = []
        this.saxonArmy = []
        this.addViking = function(viking) {
            this.vikingArmy.push(viking)
        }

        this.addSaxon = function(saxon) {
            this.saxonArmy.push(saxon)
        }


        this.vikingAttack = function(){
            var randomNumSax = Math.floor(Math.random() * (this.saxonArmy.length))
            var randomNumVik = Math.floor(Math.random() * (this.vikingArmy.length))
           var attackMessage = this.saxonArmy[randomNumSax].receiveDamage(this.vikingArmy[randomNumVik].strength)
        
            for(let saxon of this.saxonArmy){
                if(saxon.health <= 0){
                    const index = this.saxonArmy.indexOf(saxon);
                    this.saxonArmy.splice(index, 1);
                }
            }  
         return attackMessage
        }

        
        this.saxonAttack = function(){
            var randomNumSax = Math.floor(Math.random() * (this.saxonArmy.length));
            var randomNumVik = Math.floor(Math.random() * (this.vikingArmy.length));
            
            const attackMessage = this.vikingArmy[randomNumVik].receiveDamage(this.saxonArmy[randomNumSax].strength);
           
            
            for(let viking of this.vikingArmy){
                if(viking.health <= 0){
                    const index = this.vikingArmy.indexOf(viking);
                    this.vikingArmy.splice(index, 1);
                }
            }
            return attackMessage
        }

        this.showStatus = function (){
            if(this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1){
                return "Vikings and Saxons are still in the thick of battle."
            }

            else if(this.saxonArmy.length === 0){
                return "Vikings have won the war of the century!"
            }

            else if (this.vikingArmy.length === 0){
                return "Saxons have fought for their lives and survive another day..."
            }
            
        }

        
    }

}

