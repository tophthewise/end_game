import React, { Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import background from '../../Images/CaptainMarvel_Background.jpg'
import './story.css';

const backdrop = {
      
      backgroundImage: `url(${background})`,
      backgroundSize: 'cover',
      width:'100vw',
      height: '100vh'
    }
 const story = {
 	paddingTop:"20vh",
 	backgroundColor: 'rgba(0,0,0,.6)',
 }
 const center = {margin:'0 auto', textAlign: 'center', margin:'2vh'}

class Story extends Component {
constructor(){
    super();

  
};



	

//console.log(this.state);



render(){
this.state = this.props.location.state;
this.state["Iron Man"] = {story: 
"He and Nebula return to earth and discuss what happened on Titan with the heros on earth. After much deliberation The avengers discuss two possible solutions to undue the snap, and Leave it on you to decide what to do",
optionA: {label: "Quantum Realm", endStory:"Pepper Joins the team not willing to leave Iron Man again. They lure Thanos into the Quantum realm, steal the gauntlet and undo the snap while leaving Thanos in the Quantum realm. Iron Man's suit couldn't handle the strain, it breaks and You die to send everyone else back to earth. Pepper returns to earth safely and guard the earth as Tony once did. With the proof tony has a heart arch reactor."},
optionB:{label:"Soul Stone",endStory:"Pepper joins the team not willing to leave Iron man again. They Lure Thanos into the Soul Stone where they subdue him and steal the gauntlet undo the snap and transport him to titan 2.Tony, Pepper and the avengers all leave the soul stone and head home and Iron Man retires his duty to have a family with Pepper. Knighting Rhody to be the new Iron Man"}
};
this.state["Thor"] = {story: 
"Works with Captain Marvel And the rest of the avengers to strike the winning blow to kill Thanos. Devise a plan to steal the gauntlet undo the snap. Thor has two ways to remove the gauntlet Chop Thanos' Hand off, or Kill Thanos. Captain marvel and the team agree to both and Tell Thor he has to choose.",
optionA: {label: "Take his hand", endStory:"Thor uses storm breaker to chop Thanos' hand off. Gives it to Captain Marvel who sends A bionic arm for Thanos to use from now on and sends them both to Titan 2."},
optionB:{label:"Kill Thanos",endStory:"Kills Thanos with StormBreaker. Takes gauntlet, and undoes the snap"}
};
this.state["Captain Marvel"] = {story: 
"She comes to earth and Devise a plan to finish Thanos once and for all with her lazer cannons. They have to decide where to fight thanos, on earth or on Titan 2 and let you decide where",
optionA: {label: "Earth", endStory:"Thanos  and Captain Marvel go head to head on earth and eventually she knocks Thanos out with the gauntlet in hand. She takes it off of his hand and transports him back to the old Titan to rot."},
optionB:{label:"Titan 2",endStory:"Thanos is surprised to be attacked on titan 2, the whole team destroys the planet trying to get the gauntlet. Captain Marvel and Nebula knock the gauntlet off and Nebula takes control and kills thanos with the gauntlet. Nebula gives the gauntlet over to Captain marvel who holds on to it for the rest of time"}
};
		
var charStory = this.state[this.state.name];
var Mainstory = charStory.story;
var opA = charStory.optionA.label;
var opB = charStory.optionB.label;
function changeView(opt){
	let butA = $('button#optionA');
	let butB = $('button#optionB');
	let story = $('p#story');
	story.text(charStory["option"+opt].endStory);
	butA.hide();
	butB.hide();
	var cont_btn = document.createElement("button");
	cont_btn.innerHTML = "Continue";
	let ops = document.getElementById('options');
	ops.appendChild(cont_btn);

}




//console.log(this.state);

/* Iron Man
story: He and Nebula return to earth and discuss what happened on Titan with the heros on earth. 
After much deliberation The avengers discuss two possible solutions to undue the snap, and Leave it on you to decide what to do.*/

/* Quantum Realm: "Quantum Realm and steal the gauntlet" Soul Stone:"Create and use Special suits to enter the soul stone  with Thanos and save the fallen souls." */

//QR
/* Story: Pepper Joins the team not willing to leave Iron Man again. They lure Thanos into the Quantum realm, steal the gauntlet and undo the snap while leaving Thanos in the Quantum realm. Iron Man's suit couldn't handle the strain, it breaks and You die to send everyone else back to earth.*/

/* Pepper returns to earth safely and guard the earth as Tony once did. With the proof tony has a heart arch reactor. */

//SS
/* Story: Pepper joins the team not willing to leave Iron man again. They Lure Thanos into the Soul Stone where they subdue him and steal the gauntlet undo the snap and transport him to titan 2.*/

/* Tony, Pepper and the avengers all leave the soul stone and head home and Iron Man retires his duty to have a family with Pepper. Knighting Rhody to be the new Iron Man*/




/* Captain Marvel
Story: She comes to earth and Devise a plan to finish Thanos once and for all with her lazer cannons. They have to decide where to fight thanos, on earth or on Titan 2 and let you decide where.

*/
//Earth
/* Thanos  and Captain marvel go head to head on earth and eventually she knocks Thanos out with the gauntlet in hand. She takes it off of his hand and transports him back to the old Titan to rot. */
//Titan 2
/* Thanos is surprised to be attacked on titan 2, the whole team destroys the planet trying to get the gauntlet. Captain Marvel and Nebula knock the gauntlet off and Nebula takes control and kills thanos with the gauntlet. Nebula gives the gauntlet over to Captain marvel who holds on to it for the rest of time*/


/*Thor
Works with Captain Marvel And the rest of the avengers to strike the winning blow to kill Thanos. Devise a plan to steal the gauntlet undo the snap. Thor has two ways to remove the gauntlet Chop Thanos' Hand off, or Kill Thanos. Captain marvel and the team agree to both and Tell Thor he has to choose.*/

//Chop his hand off: THor uses storm breaker to chop Thanos' hand off. Gives it to Captain Marvel who sends A bionic arm for Thanos to use from now on and sends them both to Titan 2. 

// Kills Thanos with StormBreaker. Takes gauntlet, and undoes the snap.
return (
<div style={backdrop}>
<div>
		<p id="story" style={story}>
		{Mainstory}
		</p>
</div>

<div id ="options"style = {center}>
	<button id="optionA" onClick={()=> changeView('A')}>
	{opA}
	</button>
	
	<button id = "optionB"onClick={()=> changeView('B')}>
	{opB}
	</button>
</div>
</div>

	);
}
}
export default Story;
