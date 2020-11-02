/*
 * *****
 * WRITTEN BY FLORIAN RAPPL, 2012.
 * florian-rappl.de
 * mail@florian-rappl.de
 * *****
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

// if (touche==116)
// {
// alert('Non , mais vous êtes sérieux d\'appuyer sur F5 ? Vous restez ici ou faites mourir mario pour recommencer ! Non mais !\nSeriously ? Don\'t push on F5 or kill Mario ! ...')
// }
}



var cam = 0
setInterval("if(cam==-1){cam=counterplayer-1}if(cam==counterplayer){cam=0}",100)
var keys = {
	bind : function() {
		$(document).on('keydown', function(event) {	
			return keys.handler(event, true,1,0);
			return keysluigi.handler(event, true,1,0);
		});
		$(document).on('keyup', function(event) {	
			return keys.handler(event, false,1,0);
			return keysluigi.handler(event, false,1,0);
		});
	},
	reset : function() {
		keys.left = false;
		keys.right = false;
		keys.accelerate = false;
		keys.up = false;
		keys.down = false;
		keysluigi.left = false;
		keysluigi.right = false;
		keysluigi.accelerate = false;
		keysluigi.up = false;
		keysluigi.down = false;
		keys.gravity = false
		keys.gravitydeux = false
		keys.speedfast = false
		keys.grow = false
	},
	unbind : function() {
		$(document).off('keydown');
		$(document).off('keyup');
	},
	handler : function(event, status, withkeypad,elsebutton) {

		if(withkeypad){
			
		}
	if(withkeypad){
		if (cheatenabled==1){
        switch(event.keyCode) {
				case 'X'.charCodeAt():
				keys.gravity = status
				break;
			case 'C'.charCodeAt():
				keys.gravitydeux = status
				break;
			case 60:
				keys.grow = status
				break;
			case 'W'.charCodeAt():
				keys.shooter = status
				break;
			case 'B'.charCodeAt():
				keys.die = status
				break;
			case 'N'.charCodeAt():
				keys.visi = status
				break;
			case 'F'.charCodeAt():
				keys.sheller = status
				break;
			case 16:
				keys.speedfast = status
				break;
			case 57392://CTRL on MAC
			case 17://CTRL
				keys.accelerate = status;
				break;
			case 40://DOWN ARROW
				keys.down = status;
				break;
			case 39://RIGHT ARROW
				keys.right = status;
				break;
			case 37://LEFT ARROW
				keys.left = status;			
				break;
			case 38://UP ARROW
				keys.up = status;
				break;
			case 'A'.charCodeAt()://F
				keysluigi.accelerate = status;
				break;
			case 'S'.charCodeAt()://
				keysluigi.down = status;
				break;
			case 'D'.charCodeAt()://
				keysluigi.right = status;
				break;
			case 'Q'.charCodeAt()://
				keysluigi.left = status;			
				break;
			case 'Z'.charCodeAt()://
				keysluigi.up = status;
				break;
			case 'N'.charCodeAt()://F
				keyspeach.accelerate = status;
				break;
			case 'K'.charCodeAt()://
				keyspeach.down = status;
				break;
			case 'L'.charCodeAt()://
				keyspeach.right = status;
				break;
			case 'J'.charCodeAt()://
				keyspeach.left = status;			
				break;
			case 'I'.charCodeAt()://
				keyspeach.up = status;
				break;
			case 'Y'.charCodeAt()://CAMERA SWICTH
				if (cam > 2)
				{
				setTimeout('cam = 0',200)
				break;
				}
				else
				{
				setTimeout('cam += 0.5',200)
				break;
				}
			case 'T'.charCodeAt()://CAMERA SWICTH
				if (cam < 0 )
				{
				setTimeout('cam = 2',200)
				break;
				}
				else
				{
				setTimeout('cam += -0.5',200)
				break;
				}
				default:
				return true;
		}
			}
			else
        switch(event.keyCode) {
			case 57392://CTRL on MAC
			case 17://CTRL
				keys.accelerate = status;
				break;
			case 40://DOWN ARROW
				keys.down = status;
				break;
			case 39://RIGHT ARROW
				keys.right = status;
				break;
			case 37://LEFT ARROW
				keys.left = status;			
				break;
			case 38://UP ARROW
				keys.up = status;
				break;
			case 'A'.charCodeAt()://F
				keysluigi.accelerate = status;
				break;
			case 'S'.charCodeAt()://
				keysluigi.down = status;
				break;
			case 'D'.charCodeAt()://
				keysluigi.right = status;
				break;
			case 'Q'.charCodeAt()://
				keysluigi.left = status;			
				break;
			case 'Z'.charCodeAt()://
				keysluigi.up = status;
				break;
			case 'N'.charCodeAt()://F
				keyspeach.accelerate = status;
				break;
			case 'K'.charCodeAt()://
				keyspeach.down = status;
				break;
			case 'L'.charCodeAt()://
				keyspeach.right = status;
				break;
			case 'J'.charCodeAt()://
				keyspeach.left = status;			
				break;
			case 'I'.charCodeAt()://
				keyspeach.up = status;
				break;
			case 'Y'.charCodeAt()://CAMERA SWICTH
				if (cam > 2)
				{
				setTimeout('cam = 0',200)
				break;
				}
				else
				{
				setTimeout('cam += 0.5',200)
				break;
				}
			case 'T'.charCodeAt()://CAMERA SWICTH
				if (cam < 0 )
				{
				setTimeout('cam = 2',200)
				break;
				}
				else
				{
				setTimeout('cam += -0.5',200)
				break;
				}
			default:
				return true;
		}

}
	
    else{
				switch(elsebutton) {
                    case "fireball":
				keys.accelerate = status;
				break;
                    case 'down':
				keys.down = status;
				break;
                    case 'right':
				keys.right = status;
				break;
                    case 'left':
				keys.left = status;			
				break;
                    case 'up':
				keys.up = status;
				break;
			default:
				return true;
		}
    }
		event.preventDefault();
		return false;
	},
	accelerate : false,
	left : false,
	up : false,
	right : false,
	down : false,
};

var keysluigi = {
	bind : function() {
		$(document).on('keydown', function(event) {	
			return keys.handler(event, true,1,0);
		});
		$(document).on('keyup', function(event) {	
			return keys.handler(event, false,1,0);
		});
	},
	reset : function() {
		keys.left = false;
		keys.right = false;
		keys.accelerate = false;
		keys.up = false;
		keys.down = false;
	},
	unbind : function() {
		$(document).off('keydown');
		$(document).off('keyup');
	},
	handler : function(event, status, withkeypad,elsebutton) {
	if(withkeypad){
        switch(event.keyCode) {
			case 'J'.charCodeAt()://J
				keys.accelerate = status;
				break;
			case 'S'.charCodeAt()://
				keys.down = status;
				break;
			case 'D'.charCodeAt()://
				keys.right = status;
				break;
			case 'Q'.charCodeAt()://
				keys.left = status;			
				break;
			case 'Z'.charCodeAt()://
				keys.up = status;
				break;
			default:
				return true;
		}
    }
		event.preventDefault();
		return false;
	},
	accelerate : false,
	left : false,
	up : false,
	right : false,
	down : false,
};

var keyspeach = {
	bind : function() {
		$(document).on('keydown', function(event) {	
			return keys.handler(event, true,1,0);
		});
		$(document).on('keyup', function(event) {	
			return keys.handler(event, false,1,0);
		});
	},
	reset : function() {
		keys.left = false;
		keys.right = false;
		keys.accelerate = false;
		keys.up = false;
		keys.down = false;
	},
	unbind : function() {
		$(document).off('keydown');
		$(document).off('keyup');
	},
	handler : function(event, status, withkeypad,elsebutton) {
	if(withkeypad){
        switch(event.keyCode) {
			case 'B'.charCodeAt()://J
				keys.accelerate = status;
				break;
			case 'K'.charCodeAt()://
				keys.down = status;
				break;
			case 'L'.charCodeAt()://
				keys.right = status;
				break;
			case 'J'.charCodeAt()://
				keys.left = status;			
				break;
			case 'I'.charCodeAt()://
				keys.up = status;
				break;
			default:
				return true;
		}
    }
		event.preventDefault();
		return false;
	},
	accelerate : false,
	left : false,
	up : false,
	right : false,
	down : false,
};
