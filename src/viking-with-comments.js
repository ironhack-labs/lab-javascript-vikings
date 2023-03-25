// Soldier
class Soldier {

    constructor( health, strength ) {
        this.health = health;
        this.strength = strength;
    }

    attack() {
        return this.strength;
    }

    receiveDamage( damage ) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {

    constructor( name, health, strength ) {
        // inherent health and strength from "Soldier"
        super( health, strength );
        this.name = name;
    }

    receiveDamage( damage) {
        // inherent receiveDamage() from "Soldier", and ADD some code
        super.receiveDamage( damage );
        if ( this.health > 0 ) { return `${this.name} has received ${damage} points of damage.` }
        else { return `${this.name} has died in act of combat.` }
    }

    battleCry() {
        return "Odin Owns You All!";
    }
    
}

// Saxon
class Saxon extends Soldier {

    receiveDamage( damage ) {
        super.receiveDamage( damage );
        if ( this.health > 0 ) { return `A Saxon has received ${damage} points of damage.` }
        else { return `A Saxon has died in combat.` }
    }
}

// War
class War {
    
    constructor () {
        // create empty array
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking( newViking ) {
        // add new viking to army: war.addViking( new Viking('Harald',150,100) )
        this.vikingArmy.push( newViking );
    }

    addSaxon( newSaxon ) {
        this.saxonArmy.push( newSaxon );
    }

    vikingAttack() {
        // army before
        // console.log( this.vikingArmy.length ); // 3
        // console.log( this.saxonArmy.length ); // 6

        // don't attack when, armies are empty
        if ( this.vikingArmy.length <= 0 || this.saxonArmy.length <= 0  ) { return this.showStatus() }

        // pick 1 random viking, and 1 random saxon
        //      create a random number between 0 and 1, Math.random()
        //      multiply random number by the army size (availabe fighters)
        //      round it down to a whole number, Math.floor()
        //      this random number will be the index for the array of the army: array[random number]
        const randomViking = this.vikingArmy[Math.floor( Math.random() * this.vikingArmy.length )];
        const randomSaxon = this.saxonArmy[Math.floor( Math.random() * this.saxonArmy.length )];

        // for understanding the flow of the code...
        // show random viking / saxon (object)
        //     console.log( randomViking ) // Viking { health: 150, strenght: 100, name: 'Harald' }
        //     console.log( randomSaxon ) // Saxon { health: 60, strenght: 20 }
        // // access their properties
        //     console.log( randomViking.strength ) // 100
        //     console.log( randomSaxon.health ) // 60
        // // access their methods
        //     console.log( randomViking.attack() ) // 100
        //     console.log( randomSaxon.receiveDamage( 10 ) ) // [random number: 10] A Saxon has recieved 10 points of damage
        // // combine their methods
        //     console.log( randomViking.attack() ) // 100
        //     console.log( randomSaxon.receiveDamage( randomViking.attack() ) ) // A Saxon has died in combat

        // if the attackers strength is lower then the health, make damage
        // if the attackers strenght is higher than the healt, the reciver will die => remove from army
        if ( randomViking.strength < randomSaxon.health ) {
            // console.log( randomViking )
            // console.log( randomSaxon )
            // make damage: add the damage of the attacker (viking) to the reciever (saxon)
            // return the result of the attack: "A Saxon has received XXX points of damage"
            return randomSaxon.receiveDamage( randomViking.attack() )
        } else {
            // console.log( randomViking )
            // console.log( randomSaxon ) 
            // remove form army: identify array position of randomSaxon with indexOf() and remove them with splice() 
            this.saxonArmy.splice( this.saxonArmy.indexOf( randomSaxon ), 1 )
            // return the result of the attack: "A Saxon has died in combat"
            return randomSaxon.receiveDamage( randomViking.attack() )
        }

        // army afer
        // console.log( this.vikingArmy.length ); // 3
        // console.log( this.saxonArmy.length ); // 5
    }

    saxonAttack() {
        if ( this.vikingArmy.length <= 0 || this.saxonArmy.length <= 0  ) { return this.showStatus() }

        const randomViking = this.vikingArmy[Math.floor( Math.random() * this.vikingArmy.length )];
        const randomSaxon = this.saxonArmy[Math.floor( Math.random() * this.saxonArmy.length )];

        if ( randomSaxon.strength < randomViking.health ) {
            return randomViking.receiveDamage( randomSaxon.attack() )
        } else {
            this.vikingArmy.splice( this.vikingArmy.indexOf( randomViking ), 1 )
            return randomViking.receiveDamage( randomSaxon.attack() )
        }
    }

    showStatus() {

        if  ( this.vikingArmy.length > 0 && this.saxonArmy.length > 0 ) {
            return "Vikings and Saxons are still in the thick of battle.";
        }
        else if ( this.vikingArmy.length  > 0 ) { 
            return "Vikings have won the war of the century!";
        }
        else if ( this.saxonArmy.length > 0 ) {
            return "Saxons have fought for their lives and survived another day...";
        }
        else {
            return "It's the age of peace. There is no war going on right now.";
        }
        
    }
}



// start war
    const war = new War();
    console.log( war ) // empty armies
// add fighters
    // 3 * vik
    war.addViking( new Viking('Harald',150,100) ); console.log(war.vikingArmy)
    war.addViking( new Viking('Gustav',100,50) )
    war.addViking( new Viking('Olaf',50,150) )
    // 6 * sax
    war.addSaxon( new Saxon(60,20) ); console.log(war.saxonArmy)
    war.addSaxon( new Saxon(50,30) )
    war.addSaxon( new Saxon(40,40) )
    war.addSaxon( new Saxon(30,50) )
    war.addSaxon( new Saxon(20,60) )
    war.addSaxon( new Saxon(10,70) )
    console.log( war )
// show status
    console.log( war.showStatus() )
// make viking attack
    console.log( war.vikingAttack() )
// show status again
    console.log( war.showStatus() )
// make saxon attack
    console.log( war.saxonAttack() )


// TESTING
console.log( "----------------------")
console.log( war )
// status
console.log( war.showStatus() )
// several attacks, each group equal 1 hit
for ( let i = 0; i < 3; i++ ) console.log( war.vikingAttack() )
for ( let i = 0; i < 6; i++ ) console.log( war.saxonAttack() )
for ( let i = 0; i < 3; i++ ) console.log( war.vikingAttack() )
for ( let i = 0; i < 6; i++ ) console.log( war.saxonAttack() )
// status
console.log( war.showStatus() )
console.log( war )