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
        super( health, strength );
        this.name = name;
    }

    receiveDamage( damage) {
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
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking( newViking ) {
        this.vikingArmy.push( newViking );
    }

    addSaxon( newSaxon ) {
        this.saxonArmy.push( newSaxon );
    }

    // BONUS - Iteration 5: one generic attack method
    attack( attackersArmy, receiverSArmy ) {
        // ADDITION: don't attack when, armies are empty
        if ( this.vikingArmy.length <= 0 || this.saxonArmy.length <= 0  ) { return this.showStatus() }

        const attacker = attackersArmy[Math.floor( Math.random() * attackersArmy.length )];
        const reciever = receiverSArmy[Math.floor( Math.random() * receiverSArmy.length )];
        
        if ( attacker.strength < reciever.health ) { return reciever.receiveDamage( attacker.attack() );
        } else {
            receiverSArmy.splice( receiverSArmy.indexOf( reciever ), 1 );
            return reciever.receiveDamage( attacker.attack() );
        }
    }

    vikingAttack() {

        return this.attack( this.vikingArmy, this.saxonArmy );

        // const randomViking = this.vikingArmy[Math.floor( Math.random() * this.vikingArmy.length )];
        // const randomSaxon = this.saxonArmy[Math.floor( Math.random() * this.saxonArmy.length )];
        
        // if ( randomViking.strength < randomSaxon.health ) {
        //     return randomSaxon.receiveDamage( randomViking.attack() );
        // } else {
        //     this.saxonArmy.splice( this.saxonArmy.indexOf( randomSaxon ), 1 );
        //     return randomSaxon.receiveDamage( randomViking.attack() );
        // }
    }

    saxonAttack() {

        return this.attack( this.saxonArmy, this.vikingArmy );

        // const randomViking = this.vikingArmy[Math.floor( Math.random() * this.vikingArmy.length )];
        // const randomSaxon = this.saxonArmy[Math.floor( Math.random() * this.saxonArmy.length )];

        // if ( randomSaxon.strength < randomViking.health ) {
        //     return randomViking.receiveDamage( randomSaxon.attack() );
        // } else {
        //     this.vikingArmy.splice( this.vikingArmy.indexOf( randomViking ), 1 );
        //     return randomViking.receiveDamage( randomSaxon.attack() );
        // }
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
    console.log( war );

// add fighters
    war.addViking( new Viking('Harald',150,100) ); console.log(war.vikingArmy);
    war.addSaxon( new Saxon(60,20) ); console.log(war.saxonArmy);
    console.log( war );

// show status
    console.log( war.showStatus() );

// make attacks
    console.log( war.saxonAttack() );
    console.log( war.vikingAttack() );
    console.log( war );
    console.log( war.showStatus() );