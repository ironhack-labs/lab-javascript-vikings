//CONSTRUCTOR

'use strict'

function Player(startingX, startingY) {
    this.x = 1; //'this' Only used in a constructor
    this.y = 2;

    Player.prototype.PrintPosition = function() {
        console.log('Im at', this.x, this.y);
    }

    Player.prototype.move = function(direction, maxX, maxY) {
        switch (direction) {
            case 'right':
                player.x++;
                break;
            case 'left':
                player.x--;
                break;
            case 'down':
                player.y++;
                break;
            case 'up':
                player.y--;
                break;
        }
        if (player.x > maxX) {
            player.x = 0;
        }
        if (player.x < 0) {
            player.x = maxX;
        }
        if (player.y > maxY) {
            player.y = 0;
        }
        if (player.y < 0) {
            player.y = maxY;
        }
    }
}