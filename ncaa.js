function showStandings(standings, element) {
    for(var row in standings) {
	let line = standings[row];

	let owner = document.createElement('span');
	owner.setAttribute('class', 'name');
	owner.innerText = line.owner;

	let wins = document.createElement('span');
	wins.setAttribute('class', 'record');
	wins.innerText = line.wins;

	let losses = document.createElement('span');
	losses.setAttribute('class', 'record');
	losses.innerText = line.losses;

	let item = document.createElement("li");
	item.appendChild(owner);
	item.appendChild(wins);
	item.appendChild(losses);
	element.appendChild(item);
    }
}

function showDraft(draft, element) { 
    for(var key in draft) { 
	if(draft.hasOwnProperty(key)) { 
	    let item = document.createElement("li");
	    let pick = draft[key];
	    let txt = pick.owner + " - " + pick.name + " (" + pick.wins + ", " + pick.losses + ")"
	    let text = document.createTextNode(txt);
	    item.appendChild(text);
	    element.appendChild(item);
	}
    }    
}

document.addEventListener('DOMContentLoaded', function() {
    showStandings(window.FOOTBALL.ncaaStandings || {}, document.getElementById("ncaa-standings"));
    showDraft(window.FOOTBALL.ncaaDraft || {}, document.getElementById("ncaa-draft"));
    showStandings(window.FOOTBALL.nflStandings || {}, document.getElementById("nfl-standings"));
    showDraft(window.FOOTBALL.nflDraft || {}, document.getElementById("nfl-draft"));
    showStandings(window.FOOTBALL.overallStandings || {}, document.getElementById("overall-standings"));

}, false);
