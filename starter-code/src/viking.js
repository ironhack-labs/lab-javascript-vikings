// Soldier
function Soldier (health, strength) {
    this.health = health;
    this.strength = strength;
}


Soldier.prototype.attack = function (){
    return this.strength;
}

Soldier.prototype.reciveDamage = function (dmgRecived){
    this.health -= dmgRecived;
}

var chuckNorris = new Soldier(300,150);

console.log(chuckNorris.attack());
chuckNorris.reciveDamage(10);
console.log(chuckNorris.health);





// Viking
function Viking () {


}

// Saxon
function Saxon () {


}

// War
function War () {


}

