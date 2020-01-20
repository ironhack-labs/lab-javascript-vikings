//Soldier
class Soldier (health,strength) {
constructor(health,strength){
this.health = health,
this.strength= strength
}
attack(){
return this.strenght;
}
receiveDamage(damage){
this.health -= damage;


// Viking
class Viking extends Soldier{
constructor(name,health,strength){
super(health,strength),
this.name= name
}
attack(){
return this.strength;
}
receiveDamage(damage){
this.health -= damage;
if(this.health>0){
return(`${name} has received ${damage} point of damage`);
}
else{
return(`${name} has died in act of combat`);
}
battleCry(){
return('should return "Odin Owns You All!"');
}
}

// Saxon
class Saxon extends Soldier{
constructor(health,strength){
super(health,strength)
}
attack(){
return this.strength;
}
receiveDamage(damage){
this.health -= damage;
if(this.health>0){
return(`A Saxon has received ${damage} point of damage`);
}
else{
return('A Saxon has died in combat');
}
}


// War
class War(){
constructor(vikingArmy,saxonArmy){
this.vikingArmy=[],
this.saxonArmy=[]
}
addViking(Viking){
this.vikingArmy.push(Viking);
}
addSaxon(Saxon){
this.saxonArmy.push(Saxon);
}

vikingAttack(){
this.saxon.receiveDamage -= this.viking.strength;
if(this.saxon.health=0){
this.saxonArmy.splice(SaxonIndex,1);
return('A Saxon has died in combat');
}
else{
}
}

saxonAttack(){
this.viking.receiveDamage -= this.saxon.strength;
if(this.viking.health=0){
this.vikingArmy.splice(VikingIndex,1);
return(`${viking.name} has received ${saxon.strength} points of damage`);
}
else{
}
}

showStatus(){
if(saxonArmy.length===0){
return("Vikings have won the war of the century!");
}
else if{vikingArmy.length===0){
return("Saxons have fought for their lives and survived another day...");
}
else{
return("Vikings and Saxons are still in the thick of battle.");
}
}
}

