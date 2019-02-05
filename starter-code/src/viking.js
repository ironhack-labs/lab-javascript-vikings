// Soldier
function Soldier(health, strength) {
    this.health = health;
    this.strength = strength;
    
    this.attack = function(){
        this.strength = strength;
        return this.strength = 150;
    }

    this.receiveDamage = function(damage){
        this.damage = damage;
        return this.damage = health - 250;
    }
}

// Viking
function Viking(name, health, strength) {
    this.name = name;
    this. health = health;
    this.strength = strength;

    this.attack = function(){
        this.strength = strength;
        return this.strength = 150;
    }

    this.receiveDamage = function(damage){
        this.damage = damage;
        return 'Harald has died in act of combat';
    }

    this.battleCry = function(){
        
    }
    
}

    viking.prototype = Object.create(Soldier.prototype);

    var viking = new Soldier("paco", 300, 300);

// Saxon
function Saxon(health, strength) {
    this.health = health;
    this.strength = strength;

    this.attack = function(){
        this.strength = strength;
        return this.strength = 25;
    }

    this.receiveDamage = function(damage){
        this.damage = damage;
    }
}

    var saxon = new Soldier();
    
// War
function War() {

    this.addViking = function(){

    }

    this.addSaxon = function(){
        
    }

    this.vikingAttack = function(){
        // viking.call(this, attack);
    }

    this.saxonAttack = function(){

    }

    this.showStatus = function(){

    }
}
