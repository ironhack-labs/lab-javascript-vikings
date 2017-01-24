// VIKINGS CLASS, METHODS AND CHARACTERS

var Viking = function(name, total_health, strength){
this.name = name;
this.initial_health = total_health;
this.strength = strength;
this.health = this.initial_health;
this.alive = function(){
if (this.health > 0) {
 true;
}
else{
 false;
}
}
};

Viking.prototype.hit = function (enemy) {
enemy.health = enemy.health - this.strength;
};

Viking.prototype.check_ally_health = function (attacker, defender) {
if (attacker.strength > defender.health) {
return false;
}
else{
return true;
}
};

Viking.prototype.full_recover = function() {
this.health = this.initial_health;
};

var Ragnar = new Viking ("Ragnar", 1000, 130);
var Rolo = new Viking ("Rolo", 1300, 115);
var Lagarza = new Viking ("Lagarza", 800, 150);
var Bjorn = new Viking ("Bjorn", 1200, 120);
var vikingsArmy = [Ragnar, Rolo, Lagarza, Bjorn];

// SAXON CLASS, METHODS AND CHARACTERS

var Saxon = function(){
this.name = "Wild Newbie Saxon";
this.initial_health = Math.floor(Math.random()*(500-100+1))+100;
this.strength = Math.floor(Math.random()*(50-20+1))+20;
this.health = this.initial_health;
this.alive = function(){
if (this.health > 0) {
 return true;
}
else{
 return false;
}
}
};

Saxon.prototype.hit = function (enemy) {
enemy.health = enemy.health - this.strength;
};

function wildSaxonsappear (number) {
var saxons = [];
for (var i = number; i >= 0; i--) {
saxons.push(new Saxon());
}
return saxons;
}

var saxonsArmy = wildSaxonsappear(20);

function shuffle(a) {
var j, x, i;
for (i = a.length; i; i -= 1) {
   j = Math.floor(Math.random() * i);
   x = a[i - 1];
   a[i - 1] = a[j];
   a[j] = x;
}
return a;
}

// PITFIGHT CLASS AND METHODS

var PitFight = function (viking1, viking2, turns){
var turnnumber = 1;

function finish_fight() {
console.log("------------------------------------");
console.log("The figth ends. " + viking1.name + " and " + viking2.name + " go to grab some beers together. ");
console.log("------------------------------------");
viking1.full_recover();
viking2.full_recover();
}

function start_fight(){
console.log("Ladies and gentlemen! The pitfight will start. " + viking1.name + " vs. " + viking2.name + ". " + turns + " turns. Let's battle!");
console.log("------------------------------------");
fight();
}

function fight(){
while (turnnumber <= turns){
if (viking1.check_ally_health(viking1, viking2)){
 viking1.hit(viking2);
 console.log(viking1.name + " hits " + viking2.name + ". " + viking2.name + "'s health: " + viking2.health + ".");
}
else {
 finish_fight();
 break};
if (viking2.check_ally_health(viking2, viking1)){
   viking2.hit(viking1);
   console.log(viking2.name + " hits " + viking1.name + ". " + viking1.name + "'s health: " + viking1.health + ".");
}
else {
 finish_fight();
 break};
console.log("End of turn " + turnnumber);
console.log("------------------------------------");
turnnumber ++;
}
}
start_fight();

};

// brothersfight = new PitFight (Ragnar, Rolo, 10);

// WAR CLASS AND METHODS

var War = function(army1, army2, warturns){
var turnnumber = 1;
var died_vikings = [];
var died_saxons = [];

function finish_war(){
console.log("The war has ended");
console.log("Number of dead vikings: " + died_vikings.length + ".");
console.log("Number of dead saxons: " + died_saxons.length + ".");
}

function start_war(){
console.log("A bunch of saxons appeared! Let's fight!");
console.log("------------------------------------");
fight();
}

function fight(){
var selected_opponents = [];
while (turnnumber <= warturns && army1.length !== 0 && army2.length !== 0){

 army1.forEach(function(first_attacker){
   var selected_enemy = shuffle(army2)[0];
   first_attacker.hit(selected_enemy);
   console.log(first_attacker.name + " attacks " + selected_enemy.name + ". " + selected_enemy.name + "'s health is " + selected_enemy.health);
   selected_enemy.hit(first_attacker);
   console.log(selected_enemy.name + " attacks " + first_attacker.name + ". " + first_attacker.name + "'s health is " + first_attacker.health);
   if (first_attacker.alive() === false) {
     died_vikings.push(first_attacker);
     console.log(first_attacker.name + " died in combat. ");
     army1.splice(first_attacker, 1);
   };
   if (selected_enemy.alive() === false) {
     died_saxons.push(selected_enemy);
     console.log(selected_enemy.name + " died in combat. ");
     army2.splice(selected_enemy, 1);
   }
   selected_opponents.push(selected_enemy);
   army2.splice(selected_enemy, 1);



 selected_opponents.forEach(function(opponent){
   army2.push(opponent)
 });

 console.log("End of turn " + turnnumber);
 console.log("------------------------------------");
 turnnumber++;

});


};

finish_war();
}
start_war();
}

var MersiaWar = new War (vikingsArmy, saxonsArmy, 5);
console.log(Ragnar.alive());
