
var marsh = 'You hav entered the castle of Prince Salamander of the Marshlands';
function salamander(){
	alert(marsh);
}

function adventure(){

	var start = prompt("I see you tried the Konami code, would you like to go on an adventure? [y/n]");
	if(start === 'y'){
		var name = prompt('What is your name?');
		if(name!=''){
			var walk = prompt(name+", you find yourself in a hallway, you can walk north, west, or south [n/w/s]");
			if (walk === 'n'||walk === 's'||walk === 'w'){
				alert("It's a dead end");
			}else if (walk === 'e'){
				alert("you can't do that");
			}else if(walk === 'sa'){
				salamander();
			}else{
				alert("nothing happens")
			}
		}else if(name===''){
			alert("Ah, so you're no one, eh?");
			var walk = prompt("you find yourself in a hallway, you can walk north, west, or south [n/w/s]");
			if (walk === 'n'||walk === 's'||walk === 'w'){
				alert("It's a dead end");
			}else if (walk === 'e'){
				alert("you can't do that");
			}else{
				alert("nothing happens")
			}
		}
	}else if (start === 'n'){
		var goal = prompt('Then what do you want?');
		if(goal!=null){
			alert("I'm sorry, I can't help you with "+goal)
		}
	}
}