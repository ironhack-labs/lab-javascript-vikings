// Soldier
class Soldier {
    
    constructor ( health, strength ) {
        this.health = health;
        this.strength = strength;
    }
    attack (){
        return  this.strength 
    }

    
    receiveDamage ( damage ) {
        // this.damage = damage
        this.health = this.health - damage
    }
}

class Viking extends Soldier {

    constructor( name, health, strength ) {
        super( health,strength )
        this.name = name;
       
    }

    attack (){
        // return  this.strength 
        return super.attack()
    }


    receiveDamage ( damage ) {
        // this.damage = damage;
        this.health = this.health - damage
        if ( this.health > 0 ) {
            return `${ this.name } has received ${ damage } points of damage`
        } else {
           return `${ this.name } has died in act of combat`
        }
    }
    battleCry () {
        return "Odin Owns You All!"
    }
}


class Saxon extends Soldier {
    attack() {
        return  super.attack()  
   }

    receiveDamage( damage ) {

        this.health = this.health - damage
        if ( this.health > 0 ) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return "A Saxon has died in combat"
        }
    }
}



// War
class War {

    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = []

    }

    addViking(viking) {
        this.vikingArmy.push( viking )
    }

    addSaxon( saxon ) {
        this.saxonArmy.push( saxon ) 
    }

    vikingAttack() {

        let vikingrandom = this.vikingArmy[Math.floor ( Math.random() * this.vikingArmy.length )] //random index
        let saxonrandom = this.saxonArmy[Math.floor ( Math.random()*this.saxonArmy.length )]

        let attackviking = saxonrandom.receiveDamage( vikingrandom.strength );

         if ( saxonrandom.health <= 0 ) {
                this.saxonArmy.splice( saxonrandom )

        }

        return attackviking

    }

    saxonAttack() {
        let vikingrandom = this.vikingArmy[Math.floor ( Math.random() * this.vikingArmy.length )] //random index
        let saxonrandom = this.saxonArmy[Math.floor ( Math.random()*this.saxonArmy.length )]

        let attackSaxon = vikingrandom.receiveDamage( saxonrandom.strength );

         if ( vikingrandom.health <= 0 ) {
                this.vikingArmy.splice( vikingrandom )

        }

        return attackSaxon
    }

    showStatus() {

        if (( this.vikingArmy.length > 0 ) && (this.saxonArmy.length > 0)) {
            return "Vikings and Saxons are still in the thick of battle."

        } else if ( this.saxonArmy.length === 0 ) {
            return "Vikings have won the war of the century!"
            
        } else if ( this.vikingArmy.length === 0 ) {
            return "Saxons have fought for their lives and survived another day..."
        }
    }





}

