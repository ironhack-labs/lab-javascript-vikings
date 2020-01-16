// Soldier
class Soldier {
    constructor(health, strength) {
        this.length = arguments.length;
        this.health = arguments[0];
        this.strength = arguments[1];
    }

    attack() {
        return this.strength; 
    }

    receiveDamage(damage) {
        this.length = arguments.length;
        this.health = this.health - damage;
    }

}


// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super();
        this.name = arguments[0];
        this.health = arguments[1];
        this.strength = arguments[2];
    }
    receiveDamage(damage) {
        this.length = arguments.length;
        this.health = this.health - damage;
        
        if (this.health == 0) {
            return this.name+ ` has died in act of combat`;
        } else if (this.health > 0) {
            return this.name+` has received `+damage+` points of damage`;
        } else {
            return this.name+ ` has died in act of combat`;
            //return this.health ;
        }
    }
    battleCry() {
        this.length = arguments.length;
        return "Odin Owns You All!";
    }
}

// Saxon
class Saxon extends Soldier {
    receiveDamage(damage) {
        this.length = arguments.length;
        this.health = this.health - damage;
        
        if (this.health == 0) {
            return 'A Saxon has died in combat';
        } else if (this.health > 0) {
            return `A Saxon has received ` +damage+` points of damage`;
        } else {
            return 'A Saxon has died in combat';
            //return this.health ;
        }
    }
}



// War
class War {
    constructor() {
        this.vikingArmy = [];
        this.saxonArmy = [];

        this.numViking = 0;
        this.choosenViking = "";

        this.numSaxon = 0;
        this.choosenSaxon = "";            
               
    }
    addViking(viking) {
        this.vikingArmy.push(viking);
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon);
    }
    
    removeViking() {
        this.vikingArmy.splice(0,1);
    }
    removeSaxon() {
        this.saxonArmy.splice(0,1);
    }

    chooseVikingAndSaxon() {
        this.numViking = Math.floor(Math.random()*this.vikingArmy.length);
        this.choosenViking = this.vikingArmy[this.numViking];

        this.numSaxon = Math.floor(Math.random()*this.saxonArmy.length);
        this.choosenSaxon = this.saxonArmy[this.numSaxon];
        
        let name = 'Harald';
        let strength = 150;
        let health = 300;
        this.choosenViking = new Viking(name, health, strength);
 
        health = 60;
        strength = 25;
        this.choosenSaxon = new Saxon(health, strength);
        
    }
    
    vikingAttack() {
        this.chooseVikingAndSaxon();  
        let he = this.choosenSaxon.receiveDamage(this.choosenViking.strength);
        console.log(he, this.choosenSaxon.health, this.choosenViking.strength );
                       //-90           //150
        if ( this.choosenSaxon.health < this.choosenViking.health  ) {
            this.removeSaxon();
        } else {
            this.removeViking();
        }
        return he ;
    }
    saxonAttack() {
        this.chooseVikingAndSaxon();
        let he = this.choosenViking.receiveDamage(this.choosenSaxon.strength);
        if ( this.choosenSaxon.health < this.choosenViking.health  ) {
            this.removeSaxon();
        } else {
            this.removeViking();
        }
        return he;
    }
    showStatus() {

    }
}


/*
 * let  v1 =   new Viking( "A", 120,24 );
        let  v2 =   new Viking( "Abb", 120,24 );
        let  v3 =   new Viking( "Ac", 120,24 );
        let  v4 =   new Viking( "Av", 120,24 );
        let  v5 =   new Viking( "Ab", 120,24 );
        let  v6 =   new Viking( "An", 120,24 );

        this.addViking( v1 );
        this.addViking( v2 );
        this.addViking( v3 );
        this.addViking( v4 );
        this.addViking( v5 );
        this.addViking( v6 );
       
        let  s1 =   new Saxon( "A", 120,24 );
        let  s2 =   new Saxon( "Abb", 120,24 );
        let  s3 =   new Saxon( "Ac", 120,24 );
        let  s4 =   new Saxon( "Av", 120,24 );
        let  s5 =   new Saxon( "Ab", 120,24 );
        let  s6 =   new Saxon( "An", 120,24 );

        this.addSaxon( s1 );
        this.addSaxon( s2 );
        this.addSaxon( s3 );
        this.addSaxon( s4 );
        this.addSaxon( s5 );
        this.addSaxon( s6 );
 
 */