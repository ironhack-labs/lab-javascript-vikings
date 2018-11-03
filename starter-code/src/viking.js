// Soldier
function Soldier(health,strength) {
    this.health = health;
    this.strength = strength;
    this.attack = () => {
        return this.strength;
    };
    this.receiveDamage = (damage) => {
        this.health =this.health-damage; // aqui tengo dudad javi porque hice algo asi como this.health-= damage y marco error
    };
}


// Viking
function Viking(name,health,strength) {
    Soldier.call(this, health,strength);
    this.name = name;
    this.receiveDamage = (damage) => {
        if(health>=damage){
            return `${this.name} has died in act of combat`;
        }else{
            return `has received ${damage} points of damage`;
        }
        this.health=this.health-damage;
    };
    this.battleCry = () =>{
        return 'Odin Owns You All!';
    };
}
// Saxon
function Saxon(health,strength) {
    Soldier.call(this, health,strength);
    this.receiveDamage = (damage) => {
        this.health= this.health-damage;
        if(this.health>damage){
            return `A Saxon has received ${damage} points of damage`;
        }else{
            return 'A Saxon has died in combat';
        }
    }
}

// War
function War() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    this.addViking = viking => {
        this.vikingArmy.push(viking);
    };
    this.addSaxon = saxon => {
        this.saxonArmy.push(saxon);
    };

    this.vikingAttack = () => {
        let saxonIndex = Math.floor(Math.random() * (this.saxonArmy.length-1));
        let saxon = this.saxonArmy[saxonIndex];
        let viking = this.vikingArmy[Math.random() * (this.vikingArmy.length-1)];
        saxon.receiveDamage(viking.strength);
        if(saxon.health<0){
            this.saxonArmy.splice(saxonIndex,0)
        }
    }
    this.saxonAttack = () => {
        let vikingIndex = Math.floor(Math.floor(Math.random() * (this.vikingArmy.length-1)));
        let viking = this.vikingArmy[vikingIndex];
        let saxon = this.saxonArmy[Math.random() * (this.saxonArmy.length-1)];
        viking.receiveDamage(saxon.strength);
        if(viking.health<0){
            this.vikingArmy.splice(vikingIndex,0)
        }
    }


}
