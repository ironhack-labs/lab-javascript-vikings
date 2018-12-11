// Soldier
function Soldier(healthArg, strengthArg) {
    this.health= healthArg;
    this.strength= strengthArg;
}

Soldier.prototype.attack= function(){
    return this.strength;
};

Soldier.prototype.receiveDamage= function(damange){
    this.health -= damange;
};


// Viking
function Viking(nameArg, healthArg, strengthArg) {

    Soldier.call(this, healthArg, strengthArg)

    this.name = nameArg;

}

Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

Viking.prototype.receiveDamage= function(damange){
    this.health -= damange;
    if (this.health > 0){
        return `${this.name} has received ${damange} points of damage`;
    }else{
        `${this.name} as died in act of combat`;
    }
}

Viking.prototype.battleCry= function(){
    return 'Odin Owns You All!'
}



// Saxon
function Saxon(healthArg, strengthArg) {
    Soldier.call(this, healthArg, strengthArg);
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

Saxon.prototype.receiveDamage= function(damange){
    this.health -= damange;
    if (this.health > 0){
        return `A Saxon has received ${damange} points of damage`
    }else{
        `A Saxon as died in act of combat`
    }
}

// War
function War() {
    this.vikingArmy=[];
    this.saxonArmy=[];
}

War.prototype.addViking= function(viking){
    this.vikingArmy.push(viking);
}

War.prototype.addSaxon= function(saxon){
    this.saxonArmy.push(saxon);
}

War.prototype.vikingAttack= function(){

    let chosenViking= this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let chosenSaxon= this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    return chosenSaxon.receiveDamage(chosenViking.strength);
    if (chosenSaxon.health <= 0){ //If Saxon dies, it goes off the array
        this.saxonArmy.splice(chosenSaxon,1);
    }

}

War.prototype.saxonAttack= function(){

    let chosenViking= this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    let chosenSaxon= this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    return chosenViking.receiveDamage(chosenSaxon.strength);
    if (chosenViking.health <= 0){ //If Viking dies, it goes off the array
        this.vikingArmy.splice(chosenViking,1);
    }

}

War.prototype.showStatus= function(){
    if(this.saxonArmy.length === 0){
        return 'Vikings have won the war of the century!';
    }else if(this.vikingArmy ===0){
        return 'Saxons have fought for their lives and survive another day...';
    }else{
        return 'Vikings and Saxons are still in the thick of battle.';
    }
    
}