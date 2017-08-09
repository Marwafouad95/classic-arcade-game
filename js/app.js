// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    
    this.x = this.x +(this.speed * dt);
    
    //reset enemies when it out off canvas
    
    if (this.x > 505){
        this.x = 0;
    }
    
    // the collision between player and enemies
    // i took this method from mozilla developer which m.sarah mentioned in this topic https://discussions.udacity.com/t/arcade-collision-function-issues/181377/2
    
    
    var enemyPosition = {x: this.x, y: this.y, width: 50, height: 50};
    var PlayerPosition = {x: Player.x, y: Player.y, width: 70, height: 60};

    if (enemyPosition.x < PlayerPosition.x + PlayerPosition.width &&
   enemyPosition.x + enemyPosition.width > PlayerPosition.x &&
   enemyPosition.y < PlayerPosition.y + PlayerPosition.height &&
   enemyPosition.height + enemyPosition.y > PlayerPosition.y) {
       
        console.log('game over');
        Player.x = 200;
       Player.y = 400;
        
    }
    

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

var enemy1 = new Enemy(0,50,50);
var enemy2 = new Enemy(0,150,100);
var enemy3 = new Enemy(0,330,150);
var allEnemies = [enemy1,enemy2,enemy3];

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.

var Player = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite ='images/char-boy.png';
    
}

// player update method
Player.prototype.update = function(dt) {
    
    if (this.x<0) {this.x=0;}

	if (this.x>400)
		{this.x=400;}

	if(this.y<0){this.y=380;}

	if (this.y>380){this.y=380;}
};
// player handleput method
Player.prototype.handleInput = function(button) {
    if (button == 'left') {
        this.x -=100;
         
    }
    
    if (button == 'right') {
        this.x +=100;
         
    }
    
    if (button == 'up') {
        this.y -=50;
         
    }
    
    if (button == 'down') {
        this.y +=50;
         
    }
};
// player on screen 
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};




// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var Player = new Player(200,400);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    Player.handleInput(allowedKeys[e.keyCode]);
});
