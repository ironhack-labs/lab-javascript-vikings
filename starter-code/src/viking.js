// Soldier
function Soldier(healthArg, strengthArg) {
    //expect(Soldier.length).toEqual(2);
    this.health = healthArg;
    this.strength = strengthArg;
    this.attack = function(){
        return this.strength;
    };
}

// Viking
function Viking() {}

// Saxon
function Saxon() {}

// War
function War() {}
