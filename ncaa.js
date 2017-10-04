function showNcaaStandings() {
    var ncaaStandings = window.FOOTBALL.ncaaStandings || {};
    for(var row in ncaaStandings) {
	let line = ncaaStandings[row];
	let txt = line['owner'] + " (" + line['wins'] + ", " + line['losses'] + ")";
	let item = document.createElement("li");
	let textElement = document.createTextNode(txt);
	item.appendChild(textElement);
	let list = document.getElementById("ncaa-standings");
	list.appendChild(item);
    }
}

function showNcaaDraft() { 
    var ncaaDraft = window.FOOTBALL.ncaaDraft || {}
    for(var key in ncaaDraft) { 
	if(ncaaDraft.hasOwnProperty(key)) { 
	    let item = document.createElement("li");
	    let pick = ncaaDraft[key];
	    let txt = pick.owner + " - " + pick.name + " (" + pick.wins + ", " + pick.losses + ")"
	    let text = document.createTextNode(txt);
	    item.appendChild(text);
	    let list = document.getElementById("ncaa-draft");
	    list.appendChild(item);
	}
    }    
}

document.addEventListener('DOMContentLoaded', function() {
    showNcaaStandings();
    showNcaaDraft();
}, false);
