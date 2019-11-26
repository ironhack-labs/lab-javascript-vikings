// Soldier
class Soldier {
    constructor( health, strength ) {
        this.health = ( typeof health === "number" ) ? health : 0;
        this.strength = ( typeof strength === "number" ) ? strength : 0;
    }

    attack() {
        return this.strength;
    }

    receiveDamage( damage ) {
        this.health -= ( typeof damage === "number" ) ? damage : 0 ;
    }
}

// Viking
class Viking extends Soldier {
    constructor( name, health, strength ) {
        super( health, strength );
        this.name = name;
    }

    receiveDamage( damage ) {
        super.receiveDamage( damage );
        return ( this.health > 0 ) ? `${this.name} has received ${damage} points of damage` : `${this.name} has died in act of combat`;
    }

    battleCry() {
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    constructor( health, strength ) {
        super( health, strength );
    }

    receiveDamage( damage ) {
        super.receiveDamage( damage );
        return ( this.health > 0 ) ? `A Saxon has received ${damage} points of damage` : `A Saxon has died in combat`;
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking( viking ) {
        this.vikingArmy.push( viking );
    }
    
    addSaxon( saxon ) {
        this.saxonArmy.push( saxon );
    }
    
    randomSoldier( soldiers ) {
        return Math.floor( Math.random() * soldiers.length );
    }

    soldierAttack( attackerArmy, raiderArmy ) {
        let rndAttacker = this.randomSoldier( attackerArmy );
        let rndRaider =  this.randomSoldier( raiderArmy );

        let attackResult = raiderArmy[rndRaider].receiveDamage( attackerArmy[rndAttacker].attack() );
        if( raiderArmy[rndRaider].health <= 0 ) { raiderArmy.splice( rndRaider, 1 ); }
    }

    vikingAttack() {
        return this.soldierAttack(this.vikingArmy ,this.saxonArmy);
    }
    
    saxonAttack() {
        return this.soldierAttack(this.saxonArmy, this.vikingArmy);
    }

    showStatus() {
        if( this.vikingArmy.length === 0 ) return "Saxons have fought for their lives and survived another day...";
        if( this.saxonArmy.length === 0 ) return "Vikings have won the war of the century!";
        if( this.vikingArmy.length === 1 && this.saxonArmy.length === 1) return "Vikings and Saxons are still in the thick of battle.";
    }
}

