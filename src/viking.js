// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength ;
    }

        attack(){
            return this.strength;
        };

        receiveDamage(damage){
            this.health -= damage;
        };
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength)
        this.name = name;
    };

    // attack(){
    //     super.attack();
    // }

    receiveDamage(damage){
        super.receiveDamage(damage);
        return (this.health >=0 ?  "NAME has received DAMAGE points of damage" :  "NAME has died in act of combat");

    };
       
    battleCry(){
        return "Odin Owns You All!";
        };

};


// Saxon
class Saxon extends Soldier{

    // attack(){
    //     super.attack();
    // }

    receiveDamage(damage){
        super.receiveDamage(damage);
        return (this.health >=0 ? "A Saxon has received DAMAGE points of damage" : "A Saxon has died in combat");
    }

}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = [];
    }

    addViking(){

        let newViking  = new Viking(name, health, strength);
        this.vikingArmy += newViking;
        
        if(health==undefined){
            health = Math.floor(Math.random() * 100]);
        }
        if(strength==undefined){
            strength = Math.floor(Math.random() * 100]);
        };

       
    };

    addSaxon(){

        let newSaxon  = new Saxon (health, strength);
        this.saxonArmy += newSaxon;
    };


    vikingAttack(){
        let randomSaxon = this.saxonArmy[Math.floor(Math.random() * saxonArmy.length];
        
        randomSaxon.receiveDamage(this.strength)


    };

    saxonAttack();

    showStatus();

}

const war = new War()
war.addViking();


