(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,s,n){e.exports=n(31)},20:function(e,s,n){},22:function(e,s,n){},24:function(e,s,n){},26:function(e,s,n){},31:function(e,s,n){"use strict";n.r(s);var t=n(0),a=n.n(t),l=n(12),i=n.n(l),o=(n(20),n(5)),r=n(6),c=n(8),d=n(7),m=n(9),w=(n(22),n(34)),h=n(35),u=n(32),p=(n(24),n(26),n(13)),E=n.n(p),f=function(e){function s(){return Object(o.a)(this,s),Object(c.a)(this,Object(d.a)(s).apply(this,arguments))}return Object(m.a)(s,e),Object(r.a)(s,[{key:"getRows",value:function(){return this.props.data.sort(function(e,s){var n=(e.wins+.5*e.ties)/(e.wins+e.ties+e.losses),t=(s.wins+.5*s.ties)/(s.wins+s.ties+s.losses);return e.wins===s.wins?t-n:s.wins-e.wins}).map(function(e){var s=e.name,n=e.wins,t=e.losses,l=e.ties,i=e.opponents;return a.a.createElement("div",{className:"standings-grid-row"},a.a.createElement("div",{className:"standings-grid-row-label"},s),a.a.createElement("div",{className:"standings-grid-row-record"},a.a.createElement("span",null,n),a.a.createElement("span",null,t),a.a.createElement("span",null,l),a.a.createElement("span",null,((n+.5*l)/(n+t+l)).toPrecision(3))),a.a.createElement("div",{className:"standings-grid-row-opponents"},a.a.createElement("span",{className:"opp-label"}),a.a.createElement("ul",null,a.a.createElement("li",null,i.adam.wins+"-"+i.adam.losses),a.a.createElement("li",null,i.brad.wins+"-"+i.brad.losses),a.a.createElement("li",null,i.brian.wins+"-"+i.brian.losses),a.a.createElement("li",null,i.chad.wins+"-"+i.chad.losses),a.a.createElement("li",null,i.mike.wins+"-"+i.mike.losses),a.a.createElement("li",null,i.undrafted.wins+"-"+i.undrafted.losses))),a.a.createElement("div",{className:"clear"}))})}},{key:"render",value:function(){return a.a.createElement("div",{className:"standings-grid"},a.a.createElement("div",{className:E()("standings-grid-row","standings-grid-header")},a.a.createElement("div",{className:"standings-grid-row-label"},this.props.title),a.a.createElement("div",{className:"standings-grid-row-record"},a.a.createElement("span",null,"W"),a.a.createElement("span",null,"L"),a.a.createElement("span",null,"T"),a.a.createElement("span",null,"PCT")),a.a.createElement("div",{className:"standings-grid-row-opponents"},a.a.createElement("span",{className:"opp-label"},"vs."),a.a.createElement("ul",null,a.a.createElement("li",null,"Adam"),a.a.createElement("li",null,"Brad"),a.a.createElement("li",null,"Brian"),a.a.createElement("li",null,"Chad"),a.a.createElement("li",null,"Mike"),a.a.createElement("li",null,"Other"))),a.a.createElement("div",{className:"clear"})),this.getRows())}}]),s}(t.Component),b=[{name:"Adam",wins:64,losses:43,ties:0,opponents:{adam:{wins:8,losses:8},brad:{wins:10,losses:8},brian:{wins:10,losses:10},chad:{wins:5,losses:5},mike:{wins:6,losses:4},undrafted:{wins:25,losses:8}}},{name:"Brad",wins:63,losses:45,ties:0,opponents:{adam:{wins:8,losses:10},brad:{wins:8,losses:8},brian:{wins:4,losses:8},chad:{wins:5,losses:9},mike:{wins:15,losses:6},undrafted:{wins:23,losses:4}}},{name:"Brian",wins:69,losses:39,ties:0,opponents:{adam:{wins:10,losses:10},brad:{wins:8,losses:4},brian:{wins:5,losses:5},chad:{wins:8,losses:10},mike:{wins:11,losses:7},undrafted:{wins:27,losses:3}}},{name:"Chad",wins:68,losses:38,ties:0,opponents:{adam:{wins:5,losses:5},brad:{wins:9,losses:5},brian:{wins:10,losses:8},chad:{wins:7,losses:7},mike:{wins:9,losses:8},undrafted:{wins:28,losses:5}}},{name:"Mike",wins:57,losses:50,ties:0,opponents:{adam:{wins:4,losses:6},brad:{wins:6,losses:15},brian:{wins:7,losses:11},chad:{wins:8,losses:9},mike:{wins:3,losses:3},undrafted:{wins:29,losses:6}}}],g=[{name:"Adam",wins:21,losses:29,ties:0,opponents:{adam:{wins:0,losses:0},brad:{wins:0,losses:0},brian:{wins:0,losses:0},chad:{wins:0,losses:0},mike:{wins:0,losses:0},undrafted:{wins:0,losses:0}}},{name:"Brad",wins:24,losses:26,ties:0,opponents:{adam:{wins:0,losses:0},brad:{wins:0,losses:0},brian:{wins:0,losses:0},chad:{wins:0,losses:0},mike:{wins:0,losses:0},undrafted:{wins:0,losses:0}}},{name:"Brian",wins:31,losses:15,ties:2,opponents:{adam:{wins:0,losses:0},brad:{wins:0,losses:0},brian:{wins:0,losses:0},chad:{wins:0,losses:0},mike:{wins:0,losses:0},undrafted:{wins:0,losses:0}}},{name:"Chad",wins:25,losses:23,ties:0,opponents:{adam:{wins:0,losses:0},brad:{wins:0,losses:0},brian:{wins:0,losses:0},chad:{wins:0,losses:0},mike:{wins:0,losses:0},undrafted:{wins:0,losses:0}}},{name:"Mike",wins:24,losses:26,ties:1,opponents:{adam:{wins:0,losses:0},brad:{wins:0,losses:0},brian:{wins:0,losses:0},chad:{wins:0,losses:0},mike:{wins:0,losses:0},undrafted:{wins:0,losses:0}}}],v=b.map(function(e,s){return{name:e.name,wins:e.wins+g[s].wins,losses:e.losses+g[s].losses,ties:e.ties+g[s].ties,opponents:g[s].opponents}}),k=function(e){function s(){return Object(o.a)(this,s),Object(c.a)(this,Object(d.a)(s).apply(this,arguments))}return Object(m.a)(s,e),Object(r.a)(s,[{key:"render",value:function(){return a.a.createElement("div",{className:"home"},a.a.createElement("div",{className:"standings"},a.a.createElement(f,{data:b,title:"NCAA"}),a.a.createElement(f,{data:g,title:"NFL"}),a.a.createElement(f,{data:v,title:"Overall"})),a.a.createElement("div",{className:"terms"},a.a.createElement("h2",null,"Terms"),a.a.createElement("h3",null,"Overall"),a.a.createElement("p",null,"Whoever finishes with the fewest wins combined between the NFL and NCAA bets will be beer bitch. This goes into effect as soon as the position is clinched. The beer bitch's term ends when a new beer bitch is annoited or the conclusion of the following season's Super Bowl, whichever happens first."),a.a.createElement("p",null,"In the event of a tie for fewest wins, whoever has the lowest winning percentage is the overall loser. If winning percentage is also tied, the lowest winning percentage in head-to-head matchups will be the loser."),a.a.createElement("h3",null,"NFL"),a.a.createElement("p",null,"Whoever has the most wins at the end of the regular season is the winner."),a.a.createElement("p",null,"The winner gets to set a location for a guys' weekend. The location can be any of our 5 residences (with approval from all permanent residents of the house) or another location with unanimous approval. The winner is exempt from any expenses for food, drinks, or other activities that the group decides to do. The only exception to this being expenses for the NCAA bet defined below if this is done as part of the guys' weekend."),a.a.createElement("p",null,"In the event of a tie for most wins, the better winning percentage is used to determine the winner. If still tied, the team with the deepest playoff run will determine the winner. If that's not enough, head-to-head record will be the final tiebreaker."),a.a.createElement("h3",null,"NCAA"),a.a.createElement("p",null,"Whoever finishes the season with the most wins (including bowls, conference championships, and playoffs) is the winner."),a.a.createElement("p",null,"Each person has preselected a shot. For one day, the winner can call the group together to do a shot at any time. The winner is not responsible for any cost for ingredients of the shot. For the purposes of this bet, a day is defined as the time between the winner's sleep cycles on an agreed upon time."),a.a.createElement("h4",null,"Shot Selections"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("strong",null,"Adam")," Oyster Shooters w/ Bloody Mary"),a.a.createElement("li",null,a.a.createElement("strong",null,"Brad")," Tequila"),a.a.createElement("li",null,a.a.createElement("strong",null,"Brian")," Orange Creamcicle (Vanilla Vodka w/ Orange Juice)"),a.a.createElement("li",null,a.a.createElement("strong",null,"Chad")," Vodka Bomb"),a.a.createElement("li",null,a.a.createElement("strong",null,"Mike")," Malort")),a.a.createElement("p",null,"If there is a tie for most wins, the better winning percentage will determine the winner. If still tied, head-to-head record will be the final tiebreaker."),a.a.createElement("h3",null,"Side Bet"),a.a.createElement("p",null,"The 6 undrafted teams are divided into two groups. The lowest win total is the loser. Whoever backs the losing side has to do 40 hands when the entire group is together. There is no tiebreaker, if tied, everyone will do 40 hands together."),a.a.createElement("h4",null,"Sides"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("strong",null,"Browns, Rutgers, Oregon State")," Adam, Chad"),a.a.createElement("li",null,a.a.createElement("strong",null,"Colts, Illinois, Vanderbilt")," Brad, Brian, Mike"))))}}]),s}(t.Component),N=function(e){function s(){return Object(o.a)(this,s),Object(c.a)(this,Object(d.a)(s).apply(this,arguments))}return Object(m.a)(s,e),Object(r.a)(s,[{key:"render",value:function(){return a.a.createElement(w.a,null,a.a.createElement("div",null,a.a.createElement("div",{className:"header"},a.a.createElement("ul",{id:"header-menu"},a.a.createElement(h.a,{exact:!0,to:"/football/",activeClassName:"selected"},a.a.createElement("li",null,"Home")),a.a.createElement(h.a,{to:"/football/scores",activeClassName:"selected"},a.a.createElement("li",null,"Scores")),a.a.createElement(h.a,{to:"/football/draft",activeClassName:"selected"},a.a.createElement("li",null,"Draft")))),a.a.createElement("div",{className:"App"},a.a.createElement(u.a,{exact:!0,path:"/football/",component:k}),a.a.createElement(u.a,{path:"/football/scores",component:y}),a.a.createElement(u.a,{path:"/football/draft",component:O}))))}}]),s}(t.Component),y=function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Scores"),a.a.createElement("p",null,"Scoreboard will go here"))},O=function(){return a.a.createElement("div",null,a.a.createElement("h1",null,"Draft"),a.a.createElement("p",null,"Draft results will be displayed here"))},C=N;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(a.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[15,2,1]]]);
//# sourceMappingURL=main.dd21d853.chunk.js.map