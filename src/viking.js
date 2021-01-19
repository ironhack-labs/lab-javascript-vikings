// Soldier
class Soldier {
    constructor(health,strength){
        this._health = health;
        this._strength = strength;
    }

    // getters

    get health() {
        return this._health;
    }

    get strength() {
        return this._strength;
    }

    // setters

    set health (healthInput) {
        return this._health = healthInput;
    }

    set strength(strengthInput){
        return this._strength = strengthInput;
    }

    attack() {
        return this.strength
    }

    receiveDamage(theDamage) {
            this.health -= theDamage;
    }

}

// Viking
class Viking extends Soldier {
    constructor(name,health,strength){
        super(health,strength);
        this._name = name;
    }

    // getters
        get name() {
            return this._name;
        }

    // setters
        set name(nameInput) {
            this._name = nameInput;
        }

        receiveDamage(theDamage){
            this.health -= theDamage;

            if(this.health > 0) {
                return `${this.name} has recieved ${theDamage} points of damage`;
            } else {
                return `${this.name} has died in act of combat`;
            }

        }

        battleCry() {
            return 'Odin Owns You All!'
        }

}








// Saxon
class Saxon extends Soldier {
     
    receiveDamage(theDamage){
        this.health-= theDamage;

        if(this.health>0){
            return `A Saxon has recieved ${theDamage} points of damage`;
        } else {
            return `A Saxon has died in combat`;
        }

    }

}

// War
class War {
    constructor() {
        this._vikingArmy = [];
        this._saxonArmy =  [];
    }

    // Getters

    get vikingArmy(){
        return this._vikingArmy;
    }

    get saxonArmy(){
        return this._saxonArmy;
    }


    // Setters

    set vikingArmy(vikingArmyInput){
        this._vikingArmy = vikingArmyInput;
    }

    set saxonArmy(saxonArmyInput){
        this._saxonArmy = saxonArmyInput;
    }


    // Methods

    addViking(VikingWarrior) {
        this.vikingArmy.push(VikingWarrior)
    }


    addSaxon(SaxonWarrior) {
        this.saxonArmy.push(SaxonWarrior)
    }

    vikingAttack(){
        // Saxon Warrior
         const saxonWarrior = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
        
         //  Viking Warrior
        const vikingWarrior = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]; 

        // Battle
        const battleOutcome =  saxonWarrior.receiveDamage(vikingWarrior.strength);

        if(battleOutcome <= 0) {
            this.saxonArmy.pop()
        } else {
            return battleOutcome;
        }
    }
    
    saxonAttack(){

    // SaxonWarror
        const saxonWarrior = this.saxonArmy[Math.floor(Math.random()*this.saxonArmy.length)];
    

    //  Viking Warrior
        const vikingWarrior = this.vikingArmy[Math.floor(Math.random()*this.vikingArmy.length)]; 

    // Battle
     const battleOutcome =  vikingWarrior.receiveDamage(saxonWarrior.strength);

     if(battleOutcome <= 0) {
        this.vikingArmy.pop()
    } else {
        return battleOutcome;
    }


    }
    
    showStatus() {
        if(this.vikingArmy.length > 0){
            return `Vikings have won the war of the century!`;
        } else if(this.saxonArmy.length > 0){
            return 'Saxons have fought for their lives and survived another day...';
        } else {
            return 'Vikings and Saxons are still in the thick of battle.';
        }
    }
    

}

const gustavTheSwing = new Viking('Gustav', 80, 60);
const harldtheBloody = new Saxon('Harald', 70, 90);

const newWar = new War();
console.log(newWar);



newWar.addViking(gustavTheSwing);
newWar.addSaxon(harldtheBloody);
console.log(newWar.vikingArmy);
console.log(newWar.vikingAttack());

