// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health,
        this.strength = strength
    }
    attack() {
        return this.strength;
    }
    receiveDamage(damage) {
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength),
        this.name = name
    }
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return ( this.name + ' has received ' + damage + ' points of damage' )
        } else {
            return ( this.name + ' has died in act of combat')
        }
    }
    battleCry() {
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.health -= damage;
        if (this.health > 0) {
            return 'A Saxon has received ' + damage + ' points of damage'
        } else {
            return 'A Saxon has died in combat'
        }
    }
}

// War
class War {
    constructor() {
        this.vikingArmy = [],
        this.saxonArmy = []
    }

    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        const indexViking = Math.floor( Math.random() * this.vikingArmy.length );
        const indexSaxon  = Math.floor( Math.random() * this.saxonArmy.length );
        const randomViking = this.vikingArmy[ indexViking ];
        const randomSaxon  = this.saxonArmy[ indexSaxon ] ;

        //console.log(randomSaxon);
        let result = randomSaxon.receiveDamage(randomViking.attack());
        if (randomSaxon.health < 1) {
            this.saxonArmy.splice(indexSaxon, 1);
        }
        return result;
    }

    saxonAttack() {
        const indexViking = Math.floor( Math.random() * this.vikingArmy.length );
        const indexSaxon  = Math.floor( Math.random() * this.saxonArmy.length );
        const randomViking = this.vikingArmy[ indexViking ];
        const randomSaxon  = this.saxonArmy[ indexSaxon ] ;

        let result = randomViking.receiveDamage(randomSaxon.attack());
        if (randomViking.health < 1) {
            this.vikingArmy.splice(indexViking, 1);
        }
        return result;
    }

    showStatus() {
        if (this.saxonArmy.length === 0) {
            return 'Vikings have won the war of the century!'
        }
        if (this.vikingArmy.length === 0) {
            return 'Saxons have fought for their lives and survived another day...'
        }
        if (this.vikingArmy.length >= 1 && this.saxonArmy.length >= 1) {
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}

// const war = new War();

// const viking1 = new Viking('Ragnar', 2, 5);
// const viking2 = new Viking('Ragnar', 1, 3);
// const viking3 = new Viking('Ragnar', 4, 2);

// const saxon1 = new Saxon(3, 4)
// const saxon2 = new Saxon(2, 5)
// const saxon3 = new Saxon(1, 3)

// war.addViking(viking1);
// war.addViking(viking2);
// war.addViking(viking3);

// war.addSaxon(saxon1);
// war.addSaxon(saxon2);
// war.addSaxon(saxon3);

// war.vikingAttack();
// war.vikingAttack();
// war.vikingAttack();

// war.saxonAttack();
// war.saxonAttack();
// war.saxonAttack();

// console.log(war.showStatus());
