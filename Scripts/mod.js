﻿/*
 * *****
 * WRITTEN BY FLORIAN RAPPL, 2012.
 * florian-rappl.de
 * mail@florian-rappl.de
 * *****
 * -------------------------------------------
 * PRE CODE
 * -------------------------------------------
 */
 
 lettre= 0
cheatenabled=0

function touche(e){

var touche = event.keyCode;

var nom = String.fromCharCode(touche);

if (touche=='T'.charCodeAt() && lettre==4 || touche=='T'.charCodeAt() && lettre==9)
{
if(lettre==4){
document.title = 'Cheats activés !'
setTimeout("document.title = 'Super Mario HTML5 Test'",3000)
cheatenabled = 1
}
if(lettre==9){
document.title = 'Cheats désactivés !'
setTimeout("document.title = 'Super Mario HTML5 Test'",3000)
cheatenabled = 0
}
lettre += 1
if (lettre > 9)
lettre = 0 
}
if (touche=='E'.charCodeAt() && lettre==2 || touche=='E'.charCodeAt() && lettre==7)
{
if (lettre<5)
lettre = 3
else
lettre = 8
}

if (touche=='A'.charCodeAt() && lettre==3 || touche=='A'.charCodeAt() && lettre==8)
{
if (lettre<5)
lettre = 4
else
lettre = 9
}

if (touche=='C'.charCodeAt())
{
if (lettre<5)
lettre = 1
else
lettre = 6
}
if (touche=='H'.charCodeAt() && lettre==1 || touche=='H'.charCodeAt() && lettre==6)
{
if (lettre<5)
lettre = 2
else
lettre = 7
}
}
 
 levelnumber = location.href.indexOf("base_level") != -1?parseInt(location.href.split("level=")[1]):0
 if (levelnumber == 15){alert("Good job ! You have finish all basics levels ! Congratulations !\n And now try to play Discord's levels !\n The link is on main page of our site !");location.href = 'index.html'}
	for (i=0;i<definedLevels[levelnumber].data.length;i++){
	for (j=0;j<definedLevels[levelnumber].data[0].length;j++){
	if (definedLevels[levelnumber].data[i][j]=='mario'){	
	if (location.href.indexOf('&luigi') != -1)
	definedLevels[levelnumber].data[i-1][j]='luigi'
	if (location.href.indexOf('&peach') != -1)
	definedLevels[levelnumber].data[i+1][j]='peach'
	}
	}
	}
 



var Mario = Hero.extend({/*
 * -------------------------------------------
 * MARIO CLASS
 * -------------------------------------------
 */
var w = 0
	//record = confirm("Record a ghost ?")
	//if (record==true)
	//{
	//ghost123 = new Array()
	//i=-1
	//}
var Mario = Hero.extend({
	init: function(x, y, level) {
		this.standSprites = [
			[[{ x : 0, y : 81},{ x: 481, y : 83}],[{ x : 81, y : 0},{ x: 561, y : 83}]],
			[[{ x : 0, y : 162},{ x: 481, y : 247}],[{ x : 81, y : 243},{ x: 561, y : 247}]]
		];
		this.crouchSprites = [
			[{ x : 241, y : 0},{ x: 161, y : 0}],
			[{ x : 241, y : 162},{ x: 241, y : 243}]
		];
		this.deadly = 0;
		this.invulnerable = 0;
		this.width = 80;
		this._super(x, y, level);
		this.blinking = 0;
		this.setOffset(-24, 0);
		this.setSize(80, 80);
		this.cooldown = 0;
		this.setMarioState(mario_states.normal);
		this.setLifes(constants.start_lives);
		this.setCoins(0);
		this.deathBeginWait = Math.floor(700 / constants.interval);
		this.deathEndWait = 0;
		this.deathFrames = Math.floor(600 / constants.interval);
		this.deathStepUp = Math.ceil(200 / this.deathFrames);
		this.deathDir = 1;
		this.deathCount = 0;
		this.direction = directions.right;
		if (this.marioState === mario_states.normal)
		this.setImage(images.sprites, 81, 0);
		else
		this.setImage(images.spritesf, 81, 0);
		this.crouching = true;
		this.fast = false;
	},
	setMarioState: function(state) {
		this.marioState = state;
	},
	setState: function(state) {
		if(state !== this.state) {
			this.setMarioState(mario_states.normal);
			this._super(state);
		}
	},

	setPosition: function(x, y) {
		 // xmario = this.x
		 // ymario = this.y
		this._super(x, y);
		var r = this.level.width - 640;
		// var r2 = this.level.height - 640;
		if (cam==0 ||counterplayer==1){var w = (this.x <= 210) ? 0 : ((this.x >= this.level.width - 230) ? r : r / (this.level.width - 440) * (this.x - 210));		}
		// var h = (this.y <= 210) ? 0 : ((this.x >= this.level.height - 230) ? r2 : r2 / (this.level.height - 440) * (this.y - 210));	
		// document.getElementById("world").style.top = "-"+r2+"px"
		var marge = 30
		var demimarge = marge/10*7
		this.level.setParallax(w);
                document.getElementById("finish").style.position = 'absolute'
		document.getElementById("finish").style.left = definedLevels[levelnumber].x+'px'
		document.getElementById("finish").style.bottom = definedLevels[levelnumber].y-5+'px'
		if (this.x <= definedLevels[levelnumber].x + demimarge)
		document.getElementById("finish").style.zIndex= '98'
		if (this.x >= definedLevels[levelnumber].x + demimarge)
		document.getElementById("finish").style.zIndex= '100'
		if (this.x >= definedLevels[levelnumber].x && this.x <= definedLevels[levelnumber].x + marge && this.y >= definedLevels[levelnumber].y && this.y <= definedLevels[levelnumber].y + 128 && this.onground)
			 {this.victory()}
		//setInterval("i++;ghost123[i]={x:"+this.x+",y:"+this.y+"}",1000)

			 // alert(x+","+y)
	},
	input: function(keys) {
		this.fast = keys.accelerate;
		this.crouching = keys.down;
		
		if(!this.crouching) {
			if(this.onground && keys.up)
				this.jump();
				
			if(keys.accelerate && this.marioState === mario_states.fire)
				this.shoot();
				
			if(keys.right || keys.left)
				this.walk(keys.left, keys.accelerate);
			else
				this.vx = 0;
		
		}
		

	},

	victory: function() {
		document.getElementById("finish").innerHTML ='<img id="finish_level" src="Content\/mario-finish-2.gif">'
		this.level.playMusic('success');
		this.clearFrames();
		this.view.show();
		if (this.marioState === mario_states.normal)
		this.setImage(images.sprites, this.state === size_states.small ? 241 : 161, 81);
		else
		this.setImage(images.spritesf, this.state === size_states.small ? 241 : 161, 81);
		
		this.level.next();
		setTimeout("document.getElementById(\"finish\").style.display = 'none'",7000)
		setTimeout("document.write(JSON.stringify(ghost123))",1)

	},
	shoot: function() {
		if(!this.cooldown) {
			this.cooldown = constants.cooldown;
			this.level.playSound('shoot');
			new Bullet(this);
		}
	},
	setVelocity: function(vx, vy) {
		if(this.crouching) {
			vx = 0;
			this.crouch();
		} else {
			if(this.onground && vx > 0)
				this.walkRight();
			else if(this.onground && vx < 0)
				this.walkLeft();
			else
				this.stand();
		}
	
		this._super(vx, vy);
	},
	blink: function(times) {
		this.blinking = Math.max(2 * times * constants.blinkfactor, this.blinking || 0);
	},
	invincible: function() {
		this.level.playMusic('invincibility');
		this.deadly = Math.floor(constants.invincible / constants.interval);
		this.invulnerable = this.deadly;
		this.blink(Math.ceil(this.deadly / (2 * constants.blinkfactor)));
	},
	grow: function() {
		if(this.state === size_states.small) {
			this.level.playSound('grow');
			this.setState(size_states.big);
			this.blink(3);
			this.grow()
		}
	},
	shooter: function() {
		if(this.state === size_states.small)
			this.grow();
		else
			this.level.playSound('grow');
			
		this.setMarioState(mario_states.fire);
	},
	walk: function(reverse, fast) {
		if (keys.speedfast)
		this.vx = constants.walking_v * (fast ? 15 : 1) * (reverse ? - 1 : 1);
		else		
		this.vx = constants.walking_v * (fast ? 2 : 1) * (reverse ? - 1 : 1);
	},
	walkRight: function() {
		if(this.state === size_states.small) {
			if(!this.setupFrames(8, 2, true, 'WalkRightSmall'))
				this.setImage(images.sprites, 0, 0);
		} else {
			if(!this.setupFrames(9, 2, true, 'WalkRightBig'))
			if (this.marioState === mario_states.normal)
			this.setImage(images.sprites, 0, 243);
			else
			this.setImage(images.spritesf, 0, 243);
		}
	},
	walkLeft: function() {
		if(this.state === size_states.small) {
			if(!this.setupFrames(8, 2, false, 'WalkLeftSmall'))
				this.setImage(images.sprites, 80, 81);
		} else {
			if(!this.setupFrames(9, 2, false, 'WalkLeftBig'))
				if (this.marioState === mario_states.normal)
				this.setImage(images.sprites, 81, 162);
			else
				this.setImage(images.spritesf, 81, 162);
		}
	},
	stand: function() {
		var coords = this.standSprites[this.state - 1][this.direction === directions.left ? 0 : 1][this.onground ? 0 : 1];
		if (this.marioState === mario_states.normal)
		this.setImage(images.sprites, coords.x, coords.y);
		else
		this.setImage(images.spritesf, coords.x, coords.y);
		this.clearFrames();
	},
	crouch: function() {
		var coords = this.crouchSprites[this.state - 1][this.direction === directions.left ? 0 : 1];
		if (this.marioState === mario_states.normal)
		this.setImage(images.sprites, coords.x, coords.y);
		else
		this.setImage(images.spritesf, coords.x, coords.y);
		this.clearFrames();
	},
	jump: function() {
		this.level.playSound('jump');
		this.vy = constants.jumping_v ;
		
	},
	move: function() {
		this.input(keys);		
		this._super();
	move: function() {
		this.input(keys);		
		this._super();
		if (keys.gravity)
		this.jump()
	    if (keys.gravitydeux)
		this.vy = constants.gravity ;
		if (keys.grow){
		if(this.state === size_states.big){
		this.hurt()
		this.grow();
		}
		else
		{
		this.grow();
		}
		}
		if (keys.shooter)
		this.shooter();
	
		if (keys.die)
		if(this.state === size_states.big){
		this.hurt();
		}
		
		if(keys.visi)
		this.blink(1/2)						
	},		
	},
	addCoin: function() {
		this.setCoins(this.coins + 1);
		numberCoin -= -1
		if (document.getElementById("coinNumber").innerHTML==99)
		this.level.playSound("lifeupgrade")
		document.getElementById("coinNumber").innerHTML = numberCoin%100
		la100aine = (numberCoin - numberCoin%100) /100
		document.getElementById("liveNumber").innerHTML = constants.start_lives + la100aine
		window.location = "#"+la100aine
	},
	playFrame: function() {		
		if(this.blinking) {
			if(this.blinking % constants.blinkfactor === 0)
				this.view.toggle();
				
			this.blinking--;
		}
		
		if(this.cooldown)
			this.cooldown--;
		
		if(this.deadly)
			this.deadly--;
		
		if(this.invulnerable)
			this.invulnerable--;
		
		this._super();
	},
	setCoins: function(coins) {
		this.coins = coins;
		
		if(this.coins >= constants.max_coins) {
			this.addLife()
			this.coins -= constants.max_coins;
		}
				
		this.level.world.parent().children('#coinNumber').text(this.coins);
	},
	addLife: function() {
		this.level.playSound('liveupgrade');
		this.setLifes(this.lifes + 1);
	},
	setLifes : function(lifes) {
		this.lifes = lifes;
		this.level.world.parent().children('#liveNumber').text(this.lifes);
	},
	death: function() {
		if(this.deathBeginWait) {
			this.deathBeginWait--;
			return true;
		}
		
		if(this.deathEndWait)
			return --this.deathEndWait;
		
		this.view.css({ 'bottom' : (this.deathDir > 0 ? '+' : '-') + '=' + (this.deathDir > 0 ? this.deathStepUp : this.deathStepDown) + 'px' });
		this.deathCount += this.deathDir;
		
		if(this.deathCount === this.deathFrames)
			this.deathDir = -1;
		else if(this.deathCount === 0)
			this.deathEndWait = Math.floor(1800 / constants.interval);
			
		return true;
	},
	die: function() {
		adddeathplayer += 1
		this.setMarioState(mario_states.normal);
		this.deathStepDown = Math.ceil(240 / this.deathFrames);
		this.setupFrames(9, 2, false);
		this.setImage(images.sprites, 81, 324);
		this.level.playMusic('die');
		this._super();
	},
	afterfirstdie: function() {
		this.level.playMusic('overworld');
	},	
	hurt: function(from) {
		if(this.deadly)
			from.die();
		else if(this.invulnerable)
			return;
		else if(this.state === size_states.small) {
			this.die();
			function firstdie()
			{
			this.afterfirstdie()
			}
			setTimeout(firstdie(),2000)
		} else {
			this.invulnerable = Math.floor(constants.invulnerable / constants.interval);
			this.blink(Math.ceil(this.invulnerable / (2 * constants.blinkfactor)));
			this.setState(size_states.small);
			this.level.playSound('hurt');			
		}
	},
}, 'mario');



