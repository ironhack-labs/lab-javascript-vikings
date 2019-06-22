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



class Viking extends Soldier {
    constructor (name, health, strength){
        super(health, strength)
        this.name = name;
    
    }
   
    receiveDamage(damage){
        super.receiveDamage(damage);
        // this.health -= damage
        if(this.health > 0){
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry(){
        return `Odin Owns You All!`
    }
        
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    
    }
    
    attack(){
        return this.strength
    }

    receiveDamage(damage){
        super.receiveDamage(damage)
        //  super.health -= damage;
        if (this.health > 0){
            return `A Saxon has received ${damage} points of damage`
        } else {
            return `A Saxon has died in combat`
        }
    }
}

//  War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

     addViking(viking){
        this.vikingArmy.push(viking);
    }
        
    addSaxon(saxon){
        this.saxonArmy.push(saxon);
    }

    vikingAttack(){
        // let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
        // let randomVikingIndex = Math.floor (Math.random() * this.vikingArmy.length);
        // let randomSaxon = this.saxonArmy[randomSaxonIndex];
        // let randomViking = this.vikingArmy[randomVikingIndex];

        // randomSaxon.receiveDamage(randomViking.strength);

        //         if (randomSaxon.health <= 0){
        //         this.saxonArmy.splice(randomSaxonIndex,1)
        //         return `A Saxon has died in combat`
        //         } else {
        //         return `A Saxon has received ${randomViking.strength} points of damage`
        //         } 
        let rand = Math.floor(Math.random() * this.saxonArmy.length)
        let result = this.saxonArmy[rand].receiveDamage(this.vikingArmy[rand].strength);
        let updatedArmy = this.saxonArmy.filter(x => x.health >0)
        this.saxonArmy = updatedArmy;
        return result;

    }

    saxonAttack(){
    //     let randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    //     let randomVikingIndex = Math.floor (Math.random() * this.vikingArmy.length);
    //     let randomSaxon = this.saxonArmy[randomSaxonIndex];
    //     let randomViking = this.vikingArmy[randomVikingIndex];

    //     randomViking.receiveDamage(randomSaxon.strength);

    //             if (randomViking.health <= 0){
    //             this.vikingArmy.splice(randomVikingIndex,1)
    //             return `A Viking has died in combat`
    //             } else {
    //             return `A Viking has received ${randomSaxon.strength} points of damage`
    //             } 
    // }
    let rand = Math.floor(Math.random() * this.vikingArmy.length)
    let result = this.vikingArmy[rand].receiveDamage(this.saxonArmy[rand].strength)
    let updatedArmy = this.vikingArmy.filter(x => x.health >0)
    this.vikingArmy = updatedArmy;
    return result;
    }

    showStatus(){
        let numSaxons = this.saxonArmy.length
        let numVikings = this.vikingArmy.length
        if(numSaxons > 0 && numVikings >0) {
            return `Vikings and Saxons are still in the thick of battle.`
        } else if (numSaxons === 0){
            return `Vikings have won the war of the century!`
        } return `Saxons have fought for their lives and survive another day...`
    
    }

    
}


    // let theWar = {vikingArmy: []}

        // let attackResult = receiveDamage(this.randomViking.attack){
        //         if (randomSaxon.health <= 0){
        //         saxonArmy.splice(randomSaxonIndex,1)
        //         } else {
        //         return `A  Saxon has received ${randomSaxon.damage} points of damage`
        //         } 
        //  }
        // }

        
    // randomSaxon.receiveDamage(this.randomViking.strenth());
    //     if (randomSaxon.health <= 0){
    //         saxonArmy.splice(randomSaxonIndex,1)
    //          } else {
    //         return `A  Saxon has received ${randomSaxon.damage} points of damage", if the Saxon is still alive`
    //          }
    // }


    // vikingAttack(){
    //      //Saxon.receiveDamage(Viking.attack());
    //     let randomSaxonIndex = Math.floor(Math.random * this.saxonArmy.length);
    //     let randomVikingIndex = Math.floor (Math.random * this.vikingArmy.length);
    //     this.randomSaxon = this.saxonArmy[randomSaxonIndex];
    //     this.randomViking = this.vikingArmy[randomVikingIndex];
    //     Saxon.receiveDamage(this.randomViking.attack());
    //     if(this.Saxon.health <= 0){
    //         saxonArmy.splice(randomSaxonIndex,1)
    //     } else {
    //         return `A  Saxon has received ${Saxon.damage} points of damage", if the Saxon is still alive`
    //     }

    //   }
//      saxonAttack(){
//          let randomSaxonIndex = Math.floor(Math.random * this.saxonArmy.length);
//          let randomVikingIndex = Math.floor (Math.random * this.vikingArmy.length);
//          this.randomSaxon = this.saxonArmy[randomSaxonIndex];
//          this.randomViking = this.vikingArmy[randomVikingIndex];
//          return Viking.receiveDamage(this.randomsaxon.attack());
//          if(this.viking.health <0){
//              vikingArmy.splice(randomVikingIndex,1);
//          };
//      }

    
//      
// }

 
