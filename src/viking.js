// Soldier
class Soldier {
constructor(health, strength) {
this.health = health;
this.strength = strength;
}
attack(){
return this.strength; 
}
receiveDamage(damage){
this.health -= damage
}
}
// Viking
class Viking extends Soldier {
constructor(name, health, strength){
super (health, strength);
this.name = name;
}
receiveDamage(damage){
super.receiveDamage(damage);
let message;
if (this.health > 0){
message = `${this.name} has received ${damage} points of damage`
} else {
message = `${this.name} has died in act of combat`
}
return message
}
battleCry(){
return ("Odin Owns You All!")
}
}
// Saxon
class Saxon extends Soldier{
receiveDamage(damage){
super.receiveDamage(damage);
let message;
if (this.health > 0){
message = `A Saxon has received ${damage} points of damage`;
} else {
message = "A Saxon has died in combat";
}
return message;
}
}
// War
class War {
constructor() {
this.vikingArmy = [];
this.saxonArmy = [];
}
addViking(viking) {
this.vikingArmy.push(viking);
}
addSaxon(saxon) {
this.saxonArmy.push(saxon);
}
vikingAttack() {
let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
let result = randomSaxon.receiveDamage(randomViking.strength);   
if (randomSaxon.health <= 0) {
this.saxonArmy.splice(this.saxonArmy.indexOf(randomSaxon), 1);
}
return result;
}
saxonAttack() {
let randomSaxon = this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];
let randomViking = this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
let result = randomViking.receiveDamage(randomSaxon.strength);
if (randomViking.health <= 0) {
this.vikingArmy.splice(this.vikingArmy.indexOf(randomViking), 1);
}
return result;
}
}